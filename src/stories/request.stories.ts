/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { Request } from '../components/request/Request';
import { UserRole } from '../types/user-role';

const meta = {
  title: 'Example/Request',
  component: Request,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Request>;

export default meta;
type Story = StoryObj<typeof meta>;

export const recipientRequest: Story = {
  args: {
    propsForRequest: {
      id: 1,
      title: 'Заголовок Заявки',
      category: {
        id: 2,
        name: 'Категория',
      },
      date: new Date().toString(),
      description:
        'Пожалуйста, погуляйте с моей собакой, я не смогу ее выгуливать с 12.06 по 24.06 потому что уеду на обследование к врачу. Если есть желающие помочь в выгуле собаки, то звоните, 89041627779, Олег. Собаку зовут Айка, порода - немецкая овчарка, возраст - полтора года. Собака очень умная, послушная, добрая, спокойная.',
      completed: false,
      recipient: {
        id: 1,
        fullname: 'Олегов Олег Олегович',
        role: UserRole.Recipient,
        vk: 'https://vk.com/id11111111',
        photo:
          'https://plus.unsplash.com/premium_photo-1658507022538-357829d3f95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        phone: '1 (223) 443 4435',
        address: 'ул. Бассейная, д.20',
        coordinates: [22.32908767, 22.32908767],
        approved: true,
        checked: true,
        keys: null,
        adminStatus: 3,
        scores: 10,
        completed: 4,
      },
      volunteer: null,
      address: 'address',
      coordinates: [22.32908767, 22.32908767],
      chatId: null,
    },
  },
};

export const volunteerRequest: Story = {
  args: {
    propsForRequest: {
      id: 1,
      title: 'Ещё Заголовок Заявки',
      category: {
        id: 2,
        name: 'Категория',
      },
      date: new Date().toString(),
      description:
        'Пожалуйста, погуляйте с моими собаками, я не смогу их выгуливать с 18.06 по 28.06 потому что уеду на обследование к врачу. Если есть желающие помочь в выгуле собак, то звоните, 89041627779, Игнат. Собак зовут Айка и Лайка, возраст - полтора года. Собаки очень умные, послушные, добрые, спокойные.',
      completed: true,
      recipient: {
        id: 1,
        fullname: 'Игнатьев Игнат Игнатович',
        role: UserRole.Volunteer,
        vk: 'https://vk.com/id2222222',
        photo:
          'https://images.unsplash.com/photo-1601931935934-17c3717239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',
        phone: '1 (223) 443 4435',
        address: 'ул. Рассеянная, д.30',
        coordinates: [22.32908767, 22.32908767],
        approved: true,
        checked: true,
        keys: null,
        adminStatus: 3,
        scores: 5,
        completed: 3,
      },
      volunteer: null,
      address: 'address',
      coordinates: [22.32908767, 22.32908767],
      chatId: null,
    },
  },
};
