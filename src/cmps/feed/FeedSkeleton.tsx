export function FeedSkeleton() {
    return (
        <article className="feed-skeleton feed-preview">
            <article className="user-details flex align-center gap12">
                <div className="profile-img loader-img"></div>
                <div className="flex column gap5">
                    <p className="user-name loader-txt"></p>
                    <p className="shop-name loader-txt"></p>
                </div>
            </article>

            <article className="main-text flex column gap10">
                <p className="loader-txt"></p>
                <p className="loader-txt"></p>
            </article>

            <article className="images" >
                <div className="loader-img"></div>
                <div className="loader-img"></div>
            </article>

            <article className="like-comments-details flex space-between align-center">
                <div className="like flex align-center">
                    <p className="loader-txt"></p>
                    <p className="loader-txt"></p>
                </div>
                <div className="comments flex align-center">
                    <p className="loader-txt"></p>
                    <p className="loader-txt"></p>
                </div>
            </article>

            <article className="like-comments-btn">
                <div className='like-btn flex align-center justify-center'>
                    <p className="loader-txt"></p>
                    <p className="loader-txt"></p>
                </div>
                <div className="comments-btn flex align-center justify-center">
                    <p className="loader-txt"></p>
                    <p className="loader-txt"></p>
                </div>
            </article>
        </article>
    )
}