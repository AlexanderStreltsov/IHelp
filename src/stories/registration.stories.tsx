import type { Meta, StoryObj } from '@storybook/react';

import { Registration } from '../components/registration';

const meta: Meta<typeof Registration> = {
  title: 'Components/Registration',
  component: Registration,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Registration>;

export const Default: Story = {
  args: {
    onButtonClick: (data) => console.log(data),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#ffffff',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
