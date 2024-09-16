import { Feed } from "../../models/models";

export const GET_FEEDS = 'GET_FEEDS'

interface AccountState {
    feeds: Feed[];
    hasMore: boolean
}

interface FeedActionTypes {
    type: string;
    data: Feed[];
    hasMore: boolean
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
        default:
    }
    return newState
}
