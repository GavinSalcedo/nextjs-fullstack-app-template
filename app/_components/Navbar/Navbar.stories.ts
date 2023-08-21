import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '../Navbar';

const meta = {
  title: 'Common/Navbar',
  component: Navbar,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};