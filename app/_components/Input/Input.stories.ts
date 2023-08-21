import type { Meta, StoryObj } from '@storybook/react';

import Input from '../Input';

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'center',
  },
  argTypes: { onChange: { action: 'change' } },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    block: false,
    name: 'input-name',
    placeholder: 'example placeholder',
  },
};
