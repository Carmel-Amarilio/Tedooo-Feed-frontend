import { useEffect, useRef, useState } from "react";

import { Feed } from "../../models/models";

import likeGreenIcon from '../../assets/img/icons/like-green.svg';
import likeBlueIcon from '../../assets/img/icons/like-blue.svg';
import likeIcon from '../../assets/img/icons/like.svg';
import commentIcon from '../../assets/img/icons/comment.svg';

interface Props {
    feed: Feed;
    onLike: (feed: Feed) => void;
}

export function FeedPreview({ feed, onLike }: Props) {

    const { id, userId, username, avatar, shopName, shopId, images, comments, date, text, likes, didLike, premium } = feed

    function formDate(data: string) {
        return '1h'
    }


    return (
        <article className="feed-preview">
            <article className="user-details flex align-center gap12">
                <img className="profile-img" src={avatar} />
                <div className="">
                    <p className="user-name">{username}</p>
                    <p className="shop-name flex align-center gap5">{shopName}
                        <span className="date">·</span>
                        <span className="date">{formDate(date)}</span>
                    </p>
                </div>
            </article>

            <p className="main-text">{text}</p>

            <article className="images flex align-center justify-center" >
                {Array.from({ length: (images.length > 1 ? 2 : 1) }).map((_, i) =>
                    <img key={i} src={images[i]} />
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
                <div onClick={() => onLike(feed)} className={`like-btn flex align-center justify-center ${didLike ? 'active' : ''}`}>
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