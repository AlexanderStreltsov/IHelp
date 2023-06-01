/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerCard } from '../components/card/Card';
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

export const volunteerCardApproved: Story = {
  args: {
    propsForCard: {
      id: 1982398,
      fullname: 'Волонтёров Волонтёр Волонтёрович',
      role: UserRole.Volunteer,
      vk: 'https://vk.com/id2222222',
      photo:
        'https://plus.unsplash.com/premium_photo-1658507022538-357829d3f95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      phone: '1 (223) 443 4435',
      address: 'ул. Звездочётная, д.15',
      coordinates: [22.32908767, 22.32908767],
      approved: true,
      checked: true,
      keys: 4,
      adminStatus: 2,
      scores: 10,
      completed: 2,
    },
  },
};

export const volunteerCardChecked: Story = {
  args: {
    propsForCard: {
      id: 11111544,
      fullname: 'Волонтёров Волонтёр Волонтёрович',
      role: UserRole.Volunteer,
      vk: 'https://vk.com/id2222222',
      photo:
        'https://plus.unsplash.com/premium_photo-1658507022538-357829d3f95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      phone: '1 (223) 443 4435',
      address: 'ул. Звездочётная, д.15',
      coordinates: [22.32908767, 22.32908767],
      approved: true,
      checked: false,
      keys: 1,
      adminStatus: 2,
      scores: 10,
      completed: 2,
    },
  },
};
export const volunteerCardNotApproved: Story = {
  args: {
    propsForCard: {
      id: 1413144,
      fullname: 'Волонтёров Волонтёр Волонтёрович',
      role: UserRole.Volunteer,
      vk: 'https://vk.com/id2222222',
      photo:
        'https://plus.unsplash.com/premium_photo-1658507022538-357829d3f95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      phone: '1 (223) 443 4435',
      address: 'ул. Звездочётная, д.15',
      coordinates: [22.32908767, 22.32908767],
      approved: false,
      checked: false,
      keys: 0,
      adminStatus: 2,
      scores: 10,
      completed: 2,
    },
  },
};

export const recipientCard: Story = {
  args: {
    propsForCard: {
      id: 1,
      fullname: 'Реципиентов Реципиент Реципиентович',
      role: UserRole.Recipient,
      vk: 'https://vk.com/id11111111',
      photo:
        'https://images.unsplash.com/photo-1601931935934-17c3717239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',
      phone: '1 (223) 443 4435',
      address: 'ул. Луночётная, д.15',
      coordinates: [22.32908767, 22.32908767],
      approved: true,
      checked: true,
      keys: 0,
      adminStatus: 1,
      scores: 15,
      completed: 1,
    },
  },
};
