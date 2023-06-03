import { IProfileProps, Profile } from '../components/profile/profile';
import { Story } from '@storybook/react';

export default {
  title: 'components/Profile',
  component: Profile,
  tags: ['autodocs'],
};

const Template: Story<IProfileProps> = (args: any) => <Profile {...args} />;

export const User = Template.bind({});

User.args = {
  id: 10,
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
