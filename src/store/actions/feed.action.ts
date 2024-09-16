import { store } from "../store.js";

import { feedService } from "../../services/feed.service";

import { GET_FEEDS } from "../reducers/feed.reducer";
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
