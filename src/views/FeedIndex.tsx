import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Feed } from "../models/models";
import { feedService } from "../services/feed.service";

import { loadFeeds, updateStay } from "../store/actions/feed.action";

import { FeedList } from "../cmps/feed/FeedList";

const amountFeedInDOM = 12
interface RootState {
    feedModule: {
        feeds: Feed[];
        hasMore: boolean;
    };
}

export function FeedIndex(): React.ReactElement {
    const [feeds, setFeeds] = useState<Feed[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viewsFeed, setViewsFeed] = useState<{ [key: string]: boolean }>({})
    const [page, setPage] = useState<number>(0)
    const [maxPage, setMaxPage] = useState<number>(null)

    const hasMore = useSelector((storeState: RootState) => storeState.feedModule.hasMore);
    console.log(feeds);


    useEffect(() => {
        getFeeds()
    }, [page]);

    useEffect(() => {
        if (!hasMore && page > maxPage) setMaxPage(page)
    }, [page, hasMore]);


    async function getFeeds() {
        if (isLoading) return
        setIsLoading(true)
        try {
            const feeds = await loadFeeds(page)
            setFeeds(feeds)
            setIsLoading(false)
        } catch (error) {
            console.log('Something happened, cant load feeds');
            setIsLoading(false)
        }
    }

    async function saveFeed(newFeed: Feed) {
        const oldFeeds = [...feeds]
        const newFeeds = feeds.map(currFeed => {
            if (currFeed.id === newFeed.id) return newFeed
            return currFeed
        })
        setFeeds(newFeeds)
        try {
            await updateStay(newFeed)
        } catch (error) {
            console.log('Something happened, cant update feeds');
            setFeeds(oldFeeds)
        }
    }

    async function onViewsFeed(id: string) {
        if (viewsFeed[id]) return
        setViewsFeed(prev => ({ ...prev, [id]: true }))

        //return CORS error
        // try {
        //     await feedService.sendImpression(id)
        // } catch (error) {
        //     console.error('Error sending impression:', error);
        // }
    }

    function incPage(inc: number) {
        if (isLoading) return
        if (!!maxPage && page + inc > maxPage) return
        setPage(prev => prev + inc > 0 ? prev + inc : 0)
    }

    return (
        <section className="feed-index main-container">
            <FeedList
                feeds={feeds}
                isLoading={isLoading}
                incPage={incPage}
                onViewsFeed={onViewsFeed}
                saveFeed={saveFeed}
            />

        </section>
    )
}
