// import type { Meta, StoryObj } from '@storybook/react';
// import { AdminCard } from '../components/admin-card/Admin-card';

// const meta: Meta<typeof AdminCard> = {
//   title: 'UI/Checkbox',
//   component: AdminCard,
//   tags: ['autodocs'],
//   argTypes: {
//     photo: {
//       type: 'string',
//       description:
//         'Необязательный аргумент. Определяет ссылку на фотографию администратора',
//     },
//     name: {
//       type: 'string',
//       description: 'Обязательный аргумент. Определяет имя администратора',
//     },
//     surname: {
//       type: 'string',
//       description: 'Обязательный аргумент. Определяет фамилию администратора',
//     },
//     patronymic: {
//       type: 'string',
//       description:
//         'Необязательный аргумент. Определяет отчество администратора',
//     },
//     personalID: {
//       type: 'number',
//       description: 'Обязательный аргумент. Определяет ID администратора',
//     },
//     tel: {
//       type: 'string',
//       description: 'Обязательный аргумент. Определяет телефон администратора',
//     },
//     rights: {
//       verify_accounts: {
//         type: 'boolean',
//         description:
//           'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
//       },
//       create_request: {
//         type: 'boolean',
//         description:
//           'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
//       },
//       allot_key: {
//         type: 'boolean',
//         description:
//           'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
//       },
//       settle_dispute: {
//         type: 'boolean',
//         description:
//           'Обязательный аргумент. Определяет право администратора подтверждать аккаунты',
//       },
//     },
//   },
// };
// export default meta;

// type Story = StoryObj<typeof AdminCard>;

// export const FilledAdminCard: Story = {
//   args: {
//     photo:
//       'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg?size=626&ext=jpg&ga=GA1.1.109385392.1683700311',
//     name: 'Иван',
//     surname: 'Иван',
//     patronymic: 'Иван',
//     personalID: 111111111,
//     tel: '+7(000) 000-00-04',
//     rights: {
//       verify_accounts: false,
//       create_request: true,
//       allot_key: false,
//       settle_dispute: true,
//     },
//   },
// };

import {
  AdminCard,
  TAdminCardProps,
  TAdminRights,
} from '../components/admin-card/Admin-card';
import { Story } from '@storybook/react';
// import { UserRole } from '../types/user-role';
// import { string } from 'prop-types';

export default {
  title: 'components/AdminCard',
  component: AdminCard,
  tags: ['autodocs'],
  // role: {
  //   type: string,
  //   description: 'в зависимоти от роли динамически выберается профиль',
  //   defaultValue: 'admin',
  //   options: ['admin', 'chief', 'recipient', 'volunteer'],
  //   control: {
  //     type: 'radio',
  //   },
  // },
};

const Template: Story<TAdminCardProps> = (args: any) => <AdminCard {...args} />;

export const Admin = Template.bind({});

Admin.args = {
  photo:
    'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg?size=626&ext=jpg&ga=GA1.1.109385392.1683700311',
  name: 'Иван',
  surname: 'Иван',
  patronymic: 'Иван',
  personalID: 111111111,
  tel: '+7(000) 000-00-04',
  rights: {
    verify_accounts: false,
    create_request: true,
    allot_key: false,
    settle_dispute: true,
  },
};

export const NoProps = Template.bind({});

NoProps.args = {
  name: 'Имя',
  surname: 'Фамилия',

  personalID: 0,
  tel: 'no data',
  rights: {
    verify_accounts: false,
    create_request: false,
    allot_key: false,
    settle_dispute: false,
  },
};
