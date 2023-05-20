import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../ui/button/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      description: 'Размер кнопки',
      defaultValue: 'large',
    },
    type: {
      description: 'Тип кнопки',
      defaultValue: 'primary',
    },
    className: {
      description: 'Класс',
    },
    disabled: {
      type: 'boolean',
    },
    children: {
      defaultValue: 'Начать смену',
    },
    onClick: {
      description: 'Optional click handler',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  type: 'primary',
  size: 'large',
  children: 'Выбрать',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  type: 'secondary',
  size: 'large',
  children: 'Выбрать дату',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  type: 'primary',
  size: 'small',
  children: 'Выбрать',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  type: 'secondary',
  size: 'small',
  children: 'Выбрать дату',
};

export const Negative = Template.bind({});
Negative.args = {
  type: 'negative',
  size: 'small',
  children: 'Завершить смену',
};
