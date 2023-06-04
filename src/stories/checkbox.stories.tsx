import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../ui/checkbox/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    name: {
      type: 'string',
      description:
        'Обязательный аргумент. Определяет атрибут "name" input-элемента',
    },
    value: {
      type: 'string',
      description:
        'Обязательный аргумент. Определяет атрибут "value" input-элемента',
    },
    type: {
      type: 'string',
      description:
        'Необязательный аргумент (есть по умолчанию). Определяет атрибут "type" input-элемента. Не влияет на внешний вид, только на функциональность. Возможно два значения:',
    },
    check: {
      type: 'boolean',
      description:
        'Необязательный аргумент (есть по умолчанию). Определяет наличие или отсутствие состояния "checked" input-элемента',
      defaultValue: false,
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    form: {
      type: 'string',
      description:
        'Необязательный аргумент (есть по умолчанию). Определяет внешний вид элемента. Не влияет на функциональность.',
      defaultValue: 'checkbox',
      options: ['checkbox', 'button'],
      control: {
        type: 'radio',
      },
    },
    label: {
      description:
        'Необязательный аргумент. Определяет наличие ярлыка и его наименование. "null" (значение по умолчанию) - ярлык отсутствует. Если задать ярлык строкой, то это определить его наличие и имя.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const CheckedCheckbox: Story = {
  args: {
    name: 'category',
    value: '1',
    type: 'checkbox',
    check: true,
    form: 'checkbox',
    label: 'Категория 1',
  },
};

export const NotCheckedCheckbox: Story = {
  args: {
    name: 'category',
    value: '5',
    type: 'checkbox',
    form: 'checkbox',
    label: 'Категория 5',
  },
};

export const CheckboxWithoutLabel: Story = {
  args: {
    name: 'ready',
    value: 'true',
    type: 'checkbox',
    form: 'checkbox',
  },
};

export const CheckedButton: Story = {
  args: {
    name: 'distance',
    value: '1',
    type: 'radio',
    check: true,
    form: 'button',
    label: '1 км',
  },
};

export const NotCheckedButton: Story = {
  args: {
    name: 'distance',
    value: '1',
    type: 'radio',
    form: 'button',
    label: '1 км',
  },
};
