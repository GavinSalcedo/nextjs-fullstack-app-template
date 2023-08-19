import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'center',
  },
  argTypes: { onClick: { action: 'clicked' } },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: 'bg-black',
    children: 'test',
  },
};
