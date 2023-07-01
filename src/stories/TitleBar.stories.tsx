import type { Meta, StoryObj } from '@storybook/react';

import { TitleBar } from '../components/title-bar';
import { ActiveRequestVersion1Icon } from '../ui/icons/active-request-big-version-1-icon';

const meta: Meta<typeof TitleBar> = {
  title: 'Components/TitleBar',
  component: TitleBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TitleBar>;

export const Default: Story = {
  render: () => {
    return (
      <TitleBar
        icon={<ActiveRequestVersion1Icon color="dark-blue" />}
        title="Активные заявки"
        filterHandler={() => console.log('click')}
      />
    );
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '940px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
