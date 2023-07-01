import type { Meta, StoryObj } from '@storybook/react';

import { UserInfo } from '../../ui/application-tooltip/UserInfo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/UserInfo',
  component: UserInfo,
  tags: ['autodocs'],
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullInfo: Story = {
  args: {
    userAvatar:
      'https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%80%D1%83%D0%BA%D0%B8-%D0%B2%D1%8B%D1%87%D0%B5%D1%80%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-r-147006074.jpg',
    userName: 'Иванов Иван Иванович',
    userPhonenumber: '7 (123) 456 78 90',
  },
};
