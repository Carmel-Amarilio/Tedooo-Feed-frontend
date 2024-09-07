import { Feed } from "../../models/models";

import { FeedPreview } from "./FeedPreview";
import { FeedSkeleton } from "./FeedSkeleton";

interface Props {
    feeds: Feed[];
    isLoading: boolean
    getFeeds: () => void
    onViewsFeed: (id: string) => void;
    saveFeed: (feed: Feed) => void;
}

export function FeedList({ feeds, isLoading, getFeeds, saveFeed, onViewsFeed }: Props): React.ReactElement {

    return (
        <section className="feed-list">
            {!!feeds.length && feeds.map((feed, i) => (
                <FeedPreview
                    key={feed.id}
                    feed={feed}
                    isLastFeed={i === feeds.length - 1}
                    getFeeds={getFeeds}
                    onViewsFeed={onViewsFeed}
                    saveFeed={saveFeed}
                />
            ))}

            {(!feeds.length || isLoading) && Array.from({ length: 3 }).map((_, i) => <FeedSkeleton key={i} />)}

        </section>
    );
}