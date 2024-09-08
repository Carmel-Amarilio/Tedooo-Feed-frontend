import type { Meta, StoryObj } from '@storybook/react';
import { FeedSkeleton } from '../cmps/feed/FeedSkeleton';

const meta: Meta<typeof FeedSkeleton> = {
    title: 'Feed Skeleton',
    component: FeedSkeleton,
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {}
