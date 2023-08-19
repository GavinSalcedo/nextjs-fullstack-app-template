import type { Meta, StoryObj } from '@storybook/react';

import Cart from '../Cart';

const meta = {
  title: 'Common/Cart',
  component: Cart,
  parameters: {
    layout: 'center',
  },
  argTypes: {
    itemCount: {
      control: 'number',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemCount: 1,
  },
};
