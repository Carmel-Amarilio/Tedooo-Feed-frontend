import { Feed } from "../../models/models";

import { FeedPreview } from "./FeedPreview";
import { FeedSkeleton } from "./FeedSkeleton";

interface Props {
    feeds: Feed[];
    isLoading: boolean;
    getFeeds: () => void;
    onViewsFeed: (id: string) => void;
    saveFeed: (feed: Feed) => void;
}

export function FeedList({ feeds, isLoading, getFeeds, saveFeed, onViewsFeed }: Props): React.ReactElement {

    const feedToLoadFromEnd = 2
    const skeletonsAmount = 3

    return (
        <section className="feed-list">
            {feeds.map((feed, i) => (
                <FeedPreview
                    key={feed.id}
                    feed={feed}
                    isFeedToLoad={i === feeds.length - feedToLoadFromEnd}
                    getFeeds={getFeeds}
                    onViewsFeed={onViewsFeed}
                    saveFeed={saveFeed}
                />
            ))}

            {isLoading && Array.from({ length: skeletonsAmount }).map((_, i) => <FeedSkeleton key={i} />)}
            {!isLoading && !feeds.length && <h3 className="no-feeds-msg">Something happened, check internet connection</h3>}

        </section>
    );
}