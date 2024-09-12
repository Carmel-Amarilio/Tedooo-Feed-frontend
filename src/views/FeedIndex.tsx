import { useEffect, useState } from "react";

import { Feed } from "../models/models";
import { feedService } from "../services/feed.service";

import { FeedList } from "../cmps/feed/FeedList";

export function FeedIndex(): React.ReactElement {
    const [feeds, setFeeds] = useState<Feed[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viewsFeed, setViewsFeed] = useState<{ [key: string]: boolean }>({})


    useEffect(() => {
        getFeeds()
    }, [])

    async function getFeeds() {
        if (!hasMore || isLoading) return
        setIsLoading(true)
        try {
            const { data, hasMore } = await feedService.query(feeds.length)
            setFeeds(prev => [...prev, ...data])
            setHasMore(hasMore)
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
            await feedService.save(newFeed)
        } catch (error) {
            console.log('Something happened, cant update feeds');
            setFeeds(oldFeeds)
        }
    }

    async function onViewsFeed(id: string) {
        if (viewsFeed[id]) return
        setViewsFeed(prev => ({ ...prev, [id]: true }))
        console.log(id);


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
