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
};

export const Recipient = Template.bind({});

Recipient.args = {
  type: 'recipient',
};

export const Administration = Template.bind({});

Administration.args = {
  type: 'administration',
};

export const SignUp = Template.bind({});

SignUp.args = {
  type: 'signUp',
};

export const NoName = Template.bind({});

NoName.args = {
  type: 'noName',
};
