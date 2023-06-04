import { IProfileProps, Profile } from '../components/profile/profile';
import { Story } from '@storybook/react';
import { UserRole } from '../types/user-role';
import { string } from 'prop-types';

export default {
  title: 'components/Profile',
  component: Profile,
  tags: ['autodocs'],
  role: {
    type: string,
    description: 'в зависимоти от роли динамически выберается профиль',
    defaultValue: 'admin',
    options: ['admin', 'chief', 'recipient', 'volunteer'],
    control: {
      type: 'radio',
    },
  },
};

const Template: Story<IProfileProps> = (args: any) => <Profile {...args} />;

export const User = Template.bind({});

User.args = {
  id: 10,
  fullname: 'Петров Петр Петрович',
  role: UserRole.Admin,
  photo: 'http://webmg.ru/wp-content/uploads/2022/01/100-20220105_151754.jpg',
  phone: '+7 (926) 123-45-67',
  address: 'ул. Кораблестроителей, 19к1',
  scores: 5,
};

export const SignUp = Template.bind({});

SignUp.args = {
  type: 'signUp',
  id: undefined,
};

export const NoName = Template.bind({});

NoName.args = {
  type: 'noName',
  id: undefined,
};
