import { combineReducers, legacy_createStore as createStore, Store, compose } from "redux"

import { feedReducer } from "./reducers/feed.reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

interface RootState {
    // Add slices of state here
}

const rootReducer = combineReducers<RootState>({
    feedModule: feedReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<RootState> = createStore(rootReducer, composeEnhancers())
