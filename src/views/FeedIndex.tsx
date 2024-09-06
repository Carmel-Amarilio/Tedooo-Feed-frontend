import { observer } from "mobx-react"
import { useEffect, useState } from "react";

import { Feed } from "../models/models";
import { feedService } from "../services/feed.service";

import { FeedList } from "../cmps/feed/FeedList";

export function FeedIndex(): React.ReactElement {
    const [feeds, setFeeds] = useState<Feed[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    useEffect(() => {
        getFeeds()
    }, [])

    async function getFeeds() {
        try {
            const { data, hasMore } = await feedService.query()
            setFeeds(data)
            setHasMore(hasMore)
        } catch (error) {

        }
    }


    async function onLike(feed: Feed) {
        const { id, likes, didLike } = feed
        const neeLikes = likes + (didLike ? -1 : 1)
        const newFeed = { ...feed, likes: neeLikes, didLike: !didLike }
        const oldFeeds = [...feeds]
        const newFeeds = feeds.map(currFeed => {
            if (currFeed.id === newFeed.id) return newFeed
            else return currFeed
        })
        setFeeds(newFeeds)
        try {
            const updateFeed = await feedService.save(newFeed)
        } catch (error) {
            console.log('Something happened, cant update the likes');
            setFeeds(oldFeeds)
        }

    }

    return (
        <section className="feed-index main-container">
            {feeds.length ?
                <FeedList feeds={feeds} onLike={onLike} /> :
                <h1>loading...</h1>}
        </section>
    )
}
