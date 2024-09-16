import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Feed } from "../models/models";
import { feedService } from "../services/feed.service";

import { loadFeeds, updateStay } from "../store/actions/feed.action";

import { FeedList } from "../cmps/feed/FeedList";

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

    const feedsStore = useSelector((storeState: RootState) => storeState.feedModule.feeds);
    const hasMore = useSelector((storeState: RootState) => storeState.feedModule.hasMore);
    console.log(feedsStore);


    useEffect(() => {
        getFeeds()
    }, []);

    useEffect(() => {
        setFeeds(feedsStore)
    }, [feedsStore]);

    async function getFeeds() {
        if (!hasMore || isLoading) return
        setIsLoading(true)
        try {
            await loadFeeds(feedsStore.length)
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

    return (
        <section className="feed-index main-container">
            <FeedList
                feeds={feeds}
                isLoading={isLoading}
                getFeeds={getFeeds}
                onViewsFeed={onViewsFeed}
                saveFeed={saveFeed}
            />

        </section>
    )
}
