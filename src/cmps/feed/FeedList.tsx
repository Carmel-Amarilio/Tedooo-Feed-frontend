import { Feed } from "../../models/models";

import { FeedPreview } from "./FeedPreview";
import { FeedSkeleton } from "./FeedSkeleton";


const feedIndexToLoad = 2
const skeletonsAmount = 3
interface Props {
    feeds: Feed[];
    isLoading: boolean;
    incPage: (page: number) => void;
    onViewsFeed: (id: string) => void;
    saveFeed: (feed: Feed) => void;
}

export function FeedList({ feeds, isLoading, incPage, saveFeed, onViewsFeed }: Props): React.ReactElement {

    return (
        <section className="feed-list">
            {feeds.map((feed, i) => (
                <FeedPreview
                    key={feed.id}
                    feed={feed}
                    isFeedToLoadBottom={i === feeds.length - feedIndexToLoad}
                    isFeedToLoadTop={i === feedIndexToLoad - 1}
                    incPage={incPage}
                    onViewsFeed={onViewsFeed}
                    saveFeed={saveFeed}
                />
            ))}

            {isLoading && Array.from({ length: skeletonsAmount }).map((_, i) => <FeedSkeleton key={i} />)}
            {!isLoading && !feeds.length && <h3 className="no-feeds-msg">Something happened, check internet connection</h3>}

        </section>
    );
}