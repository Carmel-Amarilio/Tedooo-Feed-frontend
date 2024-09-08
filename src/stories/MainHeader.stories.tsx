import { Meta, StoryObj } from '@storybook/react';
import { MainHeader } from '../cmps/MainHeader';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof MainHeader> = {
  title: 'Main Header',
  component: MainHeader,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    }
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
