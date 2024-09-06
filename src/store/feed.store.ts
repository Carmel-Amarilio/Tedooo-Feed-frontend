import { action, makeObservable, observable, runInAction } from "mobx";

import { feedService } from "../services/feed.service";
import { Feed } from "../models/models";




class FeedStore {
    feeds: Feed[] = [];
    hasMore: boolean = true;

    constructor() {
        makeObservable(this, {
            feeds: observable,
            hasMore: observable,
            getFeeds: action,
        });
    }

    getFeeds = async (skip?: number) => {
        try {
            const { hasMore, data } = await feedService.query(skip);
            runInAction(() => {
                this.hasMore = hasMore;
                this.feeds.push(...data);
            });
        } catch (err) {
            console.log('UserActions: err in load feeds', err);
        }
    };

}

export const feedStore = new FeedStore();
