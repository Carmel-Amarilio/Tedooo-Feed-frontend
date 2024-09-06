import { Feed } from "../../models/models";
import { FeedPreview } from "./FeedPreview";

interface Props {
    feeds: Feed[];
    onLike: (feed: Feed) => void;
}

export function FeedList({ feeds, onLike }: Props): React.ReactElement {
    return (
        <section>
            {feeds.map(feed => <FeedPreview key={feed.id} feed={feed} onLike={onLike} />)}
            {/* <FeedPreview feed={feeds[0]} /> */}
        </section>
    )
}