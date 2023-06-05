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
        'Определяет наличие или отсутствие, а также местоположение уголка на верху попапа',
      defaultValue: 'right',
      options: ['right', 'center', 'none'],
      control: {
        type: 'radio',
      },
    },
    widthPopup: {
      type: 'string',
      description:
        'Определяет ширину попапа: "small" - 300px, "middle" - 370px, "big" - 586px (значения для десктопа)',
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
    outStyles: {
      type: 'string',
      description:
        'Передаем объект со стилями, которые будут вложены в аттрибут style html-элемента. Например, `outStyles={{ paddingRight: "60px" }}`. Таким образом можно переопределить уже установленные стили компонента. В приведенном примере таким образом установлена высота компонента.',
    },
    moduleOutStyles: {
      type: 'string',
      description:
        'Передаем строку с классами стилей, которые могут быть определены как глобально, так и в модуле css родительского компонента. Например: `moduleOutStyles={styles.height}` или `moduleOutStyles="text-big"`. Или оба варианта сразу с помощь шаблонных строк.',
    },
    cornerRadius: {
      type: 'boolean',
      description:
        'Определяет наличие или отсутствие закруглений углов попапа.',
      defaultValue: false,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popup>;

export const FormPopup: Story = {
  args: {
    arrow: 'right',
    widthPopup: 'middle',
    shadow: true,
    outStyles: { height: '400px' },
  },
};
