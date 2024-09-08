import type { Meta, StoryObj } from '@storybook/react';
import { FeedPreview } from '../cmps/feed/FeedPreview';

import '../assets/styles/stories/FeedPreview.stories.scss'


const meta: Meta<typeof FeedPreview> = {
    title: 'Feed Preview',
    component: FeedPreview,
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        feed: {
            id: "6318751da037be08c3b94046",
            userId: "6282267febfcb07f771359c7",
            username: "craftyfun",
            avatar: "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
            shopName: "Crafts ideas",
            shopId: "628227cdebfcb07f771359ce",
            images: [
                "https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"
            ],
            comments: 263,
            date: "2022-09-06T14:40:29.347Z",
            text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
            likes: 2142,
            didLike: false,
            premium: true
        }
    }
}
export const Like: Story = {
    args: {
        feed: {
            id: "6318751da037be08c3b94046",
            userId: "6282267febfcb07f771359c7",
            username: "craftyfun",
            avatar: "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
            shopName: "Crafts ideas",
            shopId: "628227cdebfcb07f771359ce",
            images: [
                "https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"
            ],
            comments: 263,
            date: "2022-09-06T14:40:29.347Z",
            text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
            likes: 2142,
            didLike: true,
            premium: true
        }
    }
}

export const TwoImages: Story = {
    args: {
        feed: {
            id: "6318751da037be08c3b94046",
            userId: "6282267febfcb07f771359c7",
            username: "craftyfun",
            avatar: "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
            shopName: "Crafts ideas",
            shopId: "628227cdebfcb07f771359ce",
            images: [
                "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/60e88bbd-1a16-46df-861d-99dbf3076230.jpg",
                "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/be5ea7dc-69cc-451e-b641-be09e6d0c3cd.jpg"
            ],
            comments: 263,
            date: "2022-09-06T14:40:29.347Z",
            text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
            likes: 2142,
            didLike: false,
            premium: true
        }
    }
}

export const LoadingFeed: Story = {
    args: {
        feed: {
            id: "6318751da037be08c3b94046",
            userId: "6282267febfcb07f771359c7",
            username: "craftyfun",
            avatar: "",
            shopName: "Crafts ideas",
            shopId: "628227cdebfcb07f771359ce",
            images: ['.'],
            comments: 263,
            date: "2022-09-06T14:40:29.347Z",
            text: "Unable to load feed due to no internet connection.",
            likes: 2142,
            didLike: false,
            premium: true
        }
    }
}
export const LoadingFeedTwoImages: Story = {
    args: {
        feed: {
            id: "6318751da037be08c3b94046",
            userId: "6282267febfcb07f771359c7",
            username: "craftyfun",
            avatar: "",
            shopName: "Crafts ideas",
            shopId: "628227cdebfcb07f771359ce",
            images: ['.', '.'],
            comments: 263,
            date: "2022-09-06T14:40:29.347Z",
            text: "Unable to load feed due to no internet connection.",
            likes: 2142,
            didLike: false,
            premium: true
        }
    }
}