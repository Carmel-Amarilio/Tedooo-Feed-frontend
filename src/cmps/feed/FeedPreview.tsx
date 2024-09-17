import { useEffect, useRef } from "react";

import { Feed } from "../../models/models";
import { utilService } from "../../services/util.service";

import { commentIcon, likeBlueIcon, likeGreenIcon, likeIcon } from "../../assets/img";
interface Props {
    feed: Feed;
    isFeedToLoadBottom: boolean;
    isFeedToLoadTop: boolean;
    incPage: (page: number) => void;
    onViewsFeed: (id: string) => void;
    saveFeed: (feed: Feed) => void;
}

export function FeedPreview({ feed, isFeedToLoadBottom, isFeedToLoadTop, incPage, onViewsFeed, saveFeed }: Props) {

    const { id, userId, username, avatar, shopName, shopId, images, comments, date, text, likes, didLike, premium } = feed

    const observerRef = useRef<IntersectionObserver | null>(null);
    const elRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect()

        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                if (isFeedToLoadBottom) incPage(1)
                if (isFeedToLoadTop) incPage(-1)
                onViewsFeed(id)
            }
        })

        if (elRef.current) observerRef.current.observe(elRef.current)

        return () => {
            if (observerRef.current) observerRef.current.disconnect()
        }
    })

    async function onLike() {
        const newLikes = likes + (didLike ? -1 : 1)
        const newFeed = { ...feed, likes: newLikes, didLike: !didLike }
        saveFeed(newFeed)
    }

    function handleImageLoad(ev: React.SyntheticEvent<HTMLImageElement>) {
        ev.currentTarget.classList.remove('loading');
    }

    return (
        <article className="feed-preview" ref={elRef}>
            <article className="user-details flex align-center gap12">
                <img className="profile-img loading" src={avatar} onLoad={handleImageLoad} />
                <div>
                    <p className="user-name">{username}</p>
                    <p className="shop-name flex align-center gap5">
                        {shopName}
                        <span className="date">·</span>
                        <span className="date">{utilService.formDate(date)}</span>
                    </p>
                </div>
            </article>

            <p className="main-text">{text}</p>

            <article className="images flex align-center justify-center" >
                {Array.from({ length: (images.length > 1 ? 2 : 1) }).map((_, i) =>
                    <img className="loading" key={i} src={images[i]} onLoad={handleImageLoad} />
                )}
            </article>

            <article className="like-comments-details flex space-between align-center">
                <div className="like flex align-center">
                    <img className='icon' src={likeGreenIcon} />
                    <p>{likes}</p>
                    <p>Likes</p>
                </div>
                <div className="comments flex align-center">
                    <p>{comments}</p>
                    <p>Comments</p>
                </div>
            </article>

            <article className="like-comments-btn">
                <div onClick={onLike} className={`like-btn flex align-center justify-center ${didLike ? 'active' : ''}`}>
                    <img className='icon' src={didLike ? likeBlueIcon : likeIcon} />
                    <p>Like</p>
                </div>
                <div className="comments-btn flex align-center justify-center">
                    <img className='icon' src={commentIcon} />
                    <p>Comments</p>
                </div>
            </article>

        </article>
    )
}