import { RecipientCard } from '../components/recipient-card/RecipientCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/RecipientCard',
  component: RecipientCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RecipientCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const recipientCard: Story = {
  args: {
    id: 11111114,
    fullname: 'Петров Петр Петрович',
    photo:
      'https://github.githubassets.com/images/modules/open_graph/github-octocat.png',
    phone: '+7 (000) 000-00-04',
  },
};
