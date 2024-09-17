import { store } from "../store.js";

import { feedService } from "../../services/feed.service";

import { GET_FEEDS, UPDATE_FEED } from "../reducers/feed.reducer";
import { Feed } from "../../models/models.js";


export async function loadFeeds(page: number): Promise<Feed[]> {
    const currentState = store.getState()
    let feedsStore = currentState.feedModule.feeds
    let hasMore = currentState.feedModule.hasMore

    const amountFeedInDOM = 12
    const startIndex = 6 * page - 6 < 0 ? 0 : 6 * page - 6
    const endIndex = startIndex + amountFeedInDOM > feedsStore.length && !hasMore ? feedsStore.length : startIndex + amountFeedInDOM
    if (feedsStore.length >= endIndex) return feedsStore.slice(startIndex, endIndex)

    try {
        const { data, hasMore } = await feedService.query(feedsStore.length)
        store.dispatch({
            type: GET_FEEDS,
            data,
            hasMore
        })

        feedsStore = store.getState().feedModule.feeds
        return feedsStore.slice(startIndex, endIndex)
    } catch (err) {
        console.log('Cannot load feeds', err)
        throw err
    }
}

export async function updateStay(feed: Feed) {
    try {
        const savedFeed = await feedService.save(feed)
        store.dispatch({
            type: UPDATE_FEED,
            feed: savedFeed,
        })
    } catch (error) {
        console.error("Cannot save stay:", error)
        throw error
    }
}