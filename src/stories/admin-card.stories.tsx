import {
  AdminCard,
  TAdminCardProps,
  TAdminRights,
} from '../components/admin-card/Admin-card';
import { Story } from '@storybook/react';

export default {
  title: 'components/AdminCard',
  component: AdminCard,
  tags: ['autodocs'],
};

const Template: Story<TAdminCardProps> = (args: any) => <AdminCard {...args} />;

export const Admin = Template.bind({});

Admin.args = {
  photo:
    'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg?size=626&ext=jpg&ga=GA1.1.109385392.1683700311',
  fullName: 'Иванов Иван',
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
  fullName: 'Имя Фамилия',

  personalID: 0,
  tel: 'no data',
  rights: {
    verify_accounts: false,
    create_request: false,
    allot_key: false,
    settle_dispute: false,
  },
};
