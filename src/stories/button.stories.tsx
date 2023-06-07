import { Story } from '@storybook/react';
import { Button, IButtonProps } from '../ui/button/button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'label',
    },
    disabled: {
      type: false,
    },
    icon: {
      type: 'string',
      description: 'Вариант выбора иконки для большой карточки',
      defaultValue: 'map',
      options: [
        'map',
        'active',
        'completed',
        'statistics',
        'application',
        'confirm',
      ],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Block = Template.bind({});

Block.args = {
  children: 'Заблокировать',
  type: 'block',
  disabled: false,
};

export const Apply = Template.bind({});

Apply.args = {
  children: 'Применить',
  type: 'apply',
};

export const ApplyVK = Template.bind({});

ApplyVK.args = {
  children: 'Применить',
  type: 'applyVK',
};

export const Search = Template.bind({});

Search.args = {
  children: 'Поиск',
  type: 'search',
};

export const CircleSmallPhone = Template.bind({});

CircleSmallPhone.args = {
  type: 'circleSmallPhone',
};

export const CircleSmallEmail = Template.bind({});

CircleSmallEmail.args = {
  type: 'circleSmallEmail',
};

export const CircleLocation = Template.bind({});

CircleLocation.args = {
  type: 'circleLocation',
};

export const CircleBigCross = Template.bind({});

CircleBigCross.args = {
  type: 'circleBigCross',
};

export const QuadrilateralExit = Template.bind({});

QuadrilateralExit.args = {
  type: 'quadrilateralExit',
};

export const QuadrilateralEdit = Template.bind({});

QuadrilateralEdit.args = {
  type: 'quadrilateralEdit',
};

export const QuadrilateralApprove = Template.bind({});

QuadrilateralApprove.args = {
  type: 'quadrilateralApprove',
};

export const QuadrilateralSetting = Template.bind({});

QuadrilateralSetting.args = {
  type: 'quadrilateralSetting',
};

export const QuadrilateralExcel = Template.bind({});

QuadrilateralExcel.args = {
  type: 'quadrilateralExcel',
};

export const BigCard = Template.bind({});

BigCard.args = {
  children: 'Обозначение карточки',
  type: 'bigCard',
  icon: 'map',
  active: true,
};
