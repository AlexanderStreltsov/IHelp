import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from '../components/navigation';

import { PersonIcon } from '../ui/icons/person-icon';
import { BlogIcon } from '../ui/icons/blog-icon';
import { PrivacyIcon } from '../ui/icons/privacy-icon';
import { ContactsLocationSmIcon } from '../ui/icons/contacts-location-sm-icon';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Личный кабинет',
        url: '/profile',
        icon: <PersonIcon color="dark-blue" />,
      },
      {
        title: 'Блог',
        url: '/blog',
        icon: <BlogIcon color="dark-blue" />,
      },
      {
        title: 'Политика конфиденциальности',
        url: '/privacy',
        icon: <PrivacyIcon color="dark-blue" />,
      },
      {
        title: 'Контакты',
        url: '/contacts',
        icon: <ContactsLocationSmIcon color="dark-blue" />,
      },
    ],
  },
};
