import axios from 'axios'
import { Feed } from '../models/models'


export const feedService = {
    query,
    save
}

async function query(skip = 0): Promise<{ hasMore: boolean, data: Feed[] }> {
    const { data } = await axios.get(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`)
    return data
}

async function save(feed: Feed): Promise<Feed> {
    let newFeed: Feed

    ////////////////////// send the new feed to the backend to update the DB
    // if (feed.id) newFeed = await axios.put(`https://api...`, feed)
    // else newFeed = await axios.post(`https://api...`, feed)
    // return newFeed


    return new Promise((resolve, reject) => { resolve(feed) })

}