import axios from 'axios'
import { Feed } from '../models/models'


export const feedService = {
    query,
    save,
    sendImpression
}

async function query(skip = 0): Promise<{ hasMore: boolean, data: Feed[] }> {
    const { data } = await axios.get(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`)
    return data
}

async function save(feed: Feed): Promise<Feed> {

    // send the new feed to the backend to update the DB
    // let newFeed: Feed
    // if (feed.id) newFeed = await axios.put(`https://api...`, feed)
    // else newFeed = await axios.post(`https://api...`, feed)
    // return newFeed

    return new Promise((resolve, reject) => { resolve(feed) })
}

async function sendImpression(feedId: string) {
    return await axios.get(`https://www.tedooo.com/?itemId=${feedId}`)
}