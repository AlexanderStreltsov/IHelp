import { IProfileProps, Profile } from '../components/profile/profile';
import { Story } from '@storybook/react';

export default {
  title: 'components/Profile',
  component: Profile,
  tags: ['autodocs'],
};

const Template: Story<IProfileProps> = (args: any) => <Profile {...args} />;

export const Volunteer = Template.bind({});

Volunteer.args = {
  type: 'volunteer',
  id: 10,
};

export const Recipient = Template.bind({});

Recipient.args = {
  type: 'recipient',
  id: 6,
};

export const Administration = Template.bind({});

Administration.args = {
  type: 'admin',
  id: 2,
};

export const SignUp = Template.bind({});

SignUp.args = {
  type: 'signUp',
  id: 4,
};

export const NoName = Template.bind({});

NoName.args = {
  type: 'noName',
  id: 4,
};
