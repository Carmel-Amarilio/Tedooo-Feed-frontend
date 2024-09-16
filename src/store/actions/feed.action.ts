import { store } from "../store.js";

import { feedService } from "../../services/feed.service";

import { GET_FEEDS, UPDATE_FEED } from "../reducers/feed.reducer";
import { Feed } from "../../models/models.js";



export async function loadFeeds(skip: number): Promise<Feed[]> {
    try {
        const { data, hasMore } = await feedService.query(skip)
        store.dispatch({
            type: GET_FEEDS,
            data,
            hasMore
        })
        return data
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