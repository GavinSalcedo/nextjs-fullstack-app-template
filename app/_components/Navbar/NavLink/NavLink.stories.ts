import type { Meta, StoryObj } from '@storybook/react';

import NavLink from '../NavLink';

const meta = {
  title: 'Common/NavLink',
  component: NavLink,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/cart',
    children: 'Home',
  },
};
