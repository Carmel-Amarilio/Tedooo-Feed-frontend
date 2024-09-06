import axios from 'axios'
import { Feed } from '../models/models'


export const feedService = {
    query,
}

async function query(skip = 0): Promise<{ hasMore: boolean, data: Feed[] }> {
    const { data } = await axios.get(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`)
    return data
}