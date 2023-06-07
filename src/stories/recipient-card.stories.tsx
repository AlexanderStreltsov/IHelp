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
      'https://images.unsplash.com/photo-1601931935934-17c3717239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',
    phone: '+7 (000) 000-00-04',
  },
};
