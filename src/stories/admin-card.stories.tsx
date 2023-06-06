import type { Meta, StoryObj } from '@storybook/react';
import { AdminCard } from '../components/admin-card/Admin-card';

const meta: Meta<typeof AdminCard> = {
  title: 'UI/Checkbox',
  component: AdminCard,
  tags: ['autodocs'],
  argTypes: {
    photo: {
      type: 'string',
      description:
        'Необязательный аргумент. Определяет ссылку на фотографию администратора',
    },
    name: {
      type: 'string',
      description: 'Обязательный аргумент. Определяет имя администратора',
    },
    surname: {
      type: 'string',
      description: 'Обязательный аргумент. Определяет фамилию администратора',
    },
    patronymic: {
      type: 'string',
      description:
        'Необязательный аргумент. Определяет отчество администратора',
    },
    personalID: {
      type: 'number',
      description: 'Обязательный аргумент. Определяет ID администратора',
    },
    tel: {
      type: 'string',
      description: 'Обязательный аргумент. Определяет телефон администратора',
    },
    rights: {
      verify_accounts: {
        type: 'boolean',
        description:
          'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
      },
      create_request: {
        type: 'boolean',
        description:
          'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
      },
      allot_key: {
        type: 'boolean',
        description:
          'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
      },
      settle_dispute: {
        type: 'boolean',
        description:
          'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AdminCard>;

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
