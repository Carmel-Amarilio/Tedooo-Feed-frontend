import { Feed } from "../../models/models";

export const GET_FEEDS = 'GET_FEEDS'
export const UPDATE_FEED = 'UPDATE_FEEDS'

interface AccountState {
    feeds: Feed[];
    hasMore: boolean
}

interface FeedActionTypes {
    type: string;
    data?: Feed[];
    hasMore?: boolean
    feed: Feed
}

const initialState: AccountState = {
    feeds: [],
    hasMore: true,
}

export function feedReducer(state = initialState, action: FeedActionTypes) {
    var newState = state
    switch (action.type) {
        case GET_FEEDS:
            newState = { ...state, feeds: [...state.feeds, ...action.data], hasMore: action.hasMore }
            break
        case UPDATE_FEED:
            newState = { ...state, feeds: state.feeds.map(feed => feed.id === action.feed.id ? action.feed : feed) }
            break
        default:
    }
    return newState
}
