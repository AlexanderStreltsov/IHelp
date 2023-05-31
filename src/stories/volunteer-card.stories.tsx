/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerCard } from '../components/volunteer-card/Volunteer-Card';
import { UserRole } from '../types/user-role';

const meta = {
  title: 'Example/VolunteerCard',
  component: VolunteerCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof VolunteerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const volunteerCard: Story = {
  args: {
    propsForCard: {
      id: 1,
      fullname: 'Иванов Иван Иванович',
      role: UserRole.Volunteer,
      vk: 'https://vk.com/id2222222',
      photo:
        'https://plus.unsplash.com/premium_photo-1658507022538-357829d3f95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      phone: '1 (223) 443 4435',
      address: 'ул. Звездочётная, д.15',
      coordinates: [22.32908767, 22.32908767],
      approved: true,
      checked: true,
      keys: true,
      adminStatus: 2,
      scores: 10,
      completed: 2,
    },
  },
};

export const volunteerCard2: Story = {
  args: {
    propsForCard: {
      id: 1,
      fullname: 'Петров Петр Петрович',
      role: UserRole.Volunteer,
      vk: 'https://vk.com/id11111111',
      photo:
        'https://images.unsplash.com/photo-1601931935934-17c3717239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',
      phone: '1 (223) 443 4435',
      address: 'ул. Луночётная, д.15',
      coordinates: [22.32908767, 22.32908767],
      approved: true,
      checked: true,
      keys: true,
      adminStatus: 1,
      scores: 15,
      completed: 1,
    },
  },
};