import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../ui/forms/Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Имя выпадающего списка',
    },
    label: {
      description:
        'Определяет наличие или отсутствие поясняющей надписи над списком',
    },
    initialOptionName: {
      description:
        'Отображаемое значение до того, как пользователь сделал выбор',
    },
    selectableValues: {
      description: 'Список значений, из которых осуществляется выбор',
    },
    width: {
      description: 'Ширина выпадающего списка',
    },
    labelOutStyles: {
      description: 'Внешние стили для ярлыка',
    },
    selectOutStyles: {
      description: 'Внешние стили для элемента select',
    },
    elementOutStyles: {
      description: 'Венешние стили для всего функционального компонента',
    },
    sendValue: {
      description:
        'Обеспечивает передачу выбранного значения родительскому компоненту',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortSelect: Story = {
  args: {
    name: 'city',
    width: 'short',
    initialOptionName: 'Выберите город',
    selectableValues: ['Камышин', 'Волгоград', 'Санкт-Петербург'],
  },
};

export const LongSelect: Story = {
  args: {
    name: 'city',
    width: 'long',
    label: 'Выберите тип задачи',
    initialOptionName: 'Выберите тип задачи',
    selectableValues: [
      { id: 1, name: 'Категория 1' },
      { id: 2, name: 'Категория 2' },
      { id: 3, name: 'Категория 3' },
    ],
  },
};
