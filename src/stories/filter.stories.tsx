import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Filter } from '../components/filters/filter';

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
    currentConditions: {
      description:
        'Здесь указывается переменная, в которую сохраняется условия фильтрации. Позволяет восстановить ранее сделанный выбор при повторном вызове фильтра.',
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
    currentConditions: {},
  },
};

export const FilterCompletedVolunteerApplications: Story = {
  name: 'Фильтр завершённых заявок волонтёра',
  args: {
    type: 'completedVolunteerApplications',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
    currentConditions: {},
  },
};

export const FilterActiveApplicationsVolunteer: Story = {
  name: 'Фильтр активных заявок волонтёра',
  args: {
    type: 'activeApplicationsVolunteer',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
    currentConditions: {},
  },
};

export const FilterRecipient: Story = {
  name: 'Фильтр реципиента',
  args: {
    type: 'recipient',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
    currentConditions: {},
  },
};

export const FilterAdmin: Story = {
  name: 'Фильтр администратора',
  args: {
    type: 'admin',
    sendResult: (result: { [name: string]: string[] }) => {
      console.log(result);
    },
    currentConditions: {},
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
          <button onClick={() => setIsShowFilter(true)}>Вызвать фильтр</button>
          <code>{JSON.stringify(filter)}</code>
          {isShowFilter && (
            <Filter
              sendResult={getResult}
              currentConditions={filter}
              type="volunteerApplicationMap"
            />
          )}
        </>
      );
    },
  ],
  args: {
    type: 'activeApplicationsVolunteer',
  },
};
