import type { Meta, StoryObj } from '@storybook/react';
import { Popup } from '../ui/popup/popup';

const meta: Meta<typeof Popup> = {
  title: 'UI/Popup Base',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      type: 'string',
      description:
        'Определяет наличие или отсутствие, местоположение уголка на верху попапа',
      defaultValue: 'right',
      options: ['right', 'center', 'none'],
      control: {
        type: 'radio',
      },
    },
    width: {
      type: 'string',
      description:
        'Определяет ширину попапа: "small" - 287px, "middle" - 370px, "big" - 586px',
      defaultValue: 'middle',
      options: ['small', 'middle', 'big'],
      control: {
        type: 'radio',
      },
    },
    shadow: {
      type: 'boolean',
      description: 'Определяет наличие или отсутствие тени от попапа',
      defaultValue: true,
    },
    moduleOutStyles: {
      type: 'string',
      description:
        'Передаем строку с классами стилей, которые могут быть определены как глобально, так и в модуле css родительского компонента. Они переопределят уже прописанные стили. Например: moduleOutStyles={styles.height} или moduleOutStyles="text-big". Или оба варианта сразу с помощь шаблонных строк.',
    },
    outStyles: {
      type: 'string',
      description:
        'Передаем объект со стилями, которые будут вложены в аттрибут style html-элемента. Например, outStyles={{ paddingRight: "60px" }}',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popup>;

export const PopupWithArrowMiddle: Story = {
  args: {
    arrow: 'right',
    width: 'middle',
    shadow: true,
    outStyles: { height: '400px' },
  },
};

export const PopupWithArrowCenterSmall: Story = {
  args: {
    arrow: 'center',
    width: 'small',
    shadow: true,
    outStyles: { height: '400px' },
  },
};

export const PopupWithoutArrowBig: Story = {
  args: {
    arrow: 'none',
    width: 'big',
    shadow: true,
    outStyles: { height: '400px' },
  },
};
