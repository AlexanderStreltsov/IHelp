import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '../ui/button/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      name: 'label',
    },
    disabled: {
      type: false,
    },
  },
};

// export default meta;

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

export const circleBigCross = Template.bind({});

circleBigCross.args = {
  type: 'circleBigCross',
};

export const quadrilateralExit = Template.bind({});

quadrilateralExit.args = {
  type: 'quadrilateralExit',
};

export const quadrilateralEdit = Template.bind({});

quadrilateralEdit.args = {
  type: 'quadrilateralEdit',
};

export const quadrilateralConfirm = Template.bind({});

quadrilateralConfirm.args = {
  type: 'quadrilateralConfirm',
};

export const quadrilateralSetting = Template.bind({});

quadrilateralSetting.args = {
  type: 'quadrilateralSetting',
};
