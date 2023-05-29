import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Filter } from '../components/filter/filter';

const meta: Meta<typeof Filter> = {
  title: 'Components/Filters',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
    sendResult: {
      description:
        'Функция родительского компонента, принимающая результат выбора и закрывающая окно фильтра.',
    },
    type: {
      type: 'string',
      description: 'Варианты необходимого фильтра.',
      options: [
        'volunteerApplicationMap',
        'completedVolunteerApplications',
        'activeApplicationsVolunteer',
        'recipient',
        'admin',
      ],
      control: {
        type: 'radio',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Filter>;

export const FilterVolunteerApplicationMap: Story = {
  name: 'Фильтр какрты заявок волонтёра',
  args: {
    type: 'volunteerApplicationMap',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
  },
};

export const FilterCompletedVolunteerApplications: Story = {
  name: 'Фильтр завершённых заявок волонтёра',
  args: {
    type: 'completedVolunteerApplications',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
  },
};

export const FilterActiveApplicationsVolunteer: Story = {
  name: 'Фильтр активных заявок волонтёра',
  args: {
    type: 'activeApplicationsVolunteer',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
  },
};

export const FilterRecipient: Story = {
  name: 'Фильтр реципиента',
  args: {
    type: 'recipient',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
  },
};

export const FilterAdmin: Story = {
  name: 'Фильтр администратора',
  args: {
    type: 'admin',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
  },
};

export const FilterWork: Story = {
  name: 'Пример работы заявки',
  decorators: [
    (Story) => {
      const [filter, setFilter] = useState({});
      const [isShowFilter, setIsShowFilter] = useState(true);
      const getResult = (result: { [name: string]: string[] }) => {
        setFilter({ ...result });
        setIsShowFilter(false);
      };
      return (
        <>
          <code>{JSON.stringify(filter)}</code>
          {isShowFilter && (
            <Filter sendResult={getResult} type="activeApplicationsVolunteer" />
          )}
        </>
      );
    },
  ],
  args: {
    type: 'activeApplicationsVolunteer',
  },
};
