import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../components/dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => <Dropdown />,
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '93px',
        }}
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
