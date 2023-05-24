/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { Request } from '../components/request/Request';
import photo from '../../images/avatar.svg';

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

export const userOne: Story = {
  args: {
    date: new Date(),
    location: 'ул. Потолочного д. 9',
    header: 'Заголовок1',
    text: 'Пожалуйста, погуляйте с моей собакой, я не смогу ее выгуливать с 12.06 по 24.06 потому что уеду на обследование к врачу. Если есть желающие помочь в выгуле собаки, то звоните, 89041627779, Елена. Собаку зовут Айка, порода - немецкая овчарка, возраст - полтора года. Собака очень умная, послушная, добрая, спокойная.',
    avatar: photo,
    name: 'Петров Петр Петрович',
    phone: '+1(234) 123 4567',
    offers: 3,
  },
};

export const userTwo: Story = {
  args: {
    date: new Date(),
    location: 'ул. Потолочного д. 10',
    header: 'Заголовок2',
    text: 'Пожалуйста, погуляйте с моим котом , я не смогу его выгуливать с 12.01 по 24.01 потому что уеду на обследование к врачу. Если есть желающие помочь в выгуле кота, то звоните, 89041627779, Павел. Кота зовут Марсик, порода - бенгал, возраст - два года. Кот очень умный, послушный, добрый, спокойный.',
    avatar: photo,
    name: 'Иванов Иван Иванович',
    phone: '+1(234) 321 7654',
    offers: 5,
  },
};
