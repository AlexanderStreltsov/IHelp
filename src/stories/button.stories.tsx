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

export const CircleSmall = Template.bind({});

CircleSmall.args = {
  type: 'circleSmall',
};

export const CircleMiddle = Template.bind({});

CircleMiddle.args = {
  type: 'circleMiddle',
};

export const CircleBig = Template.bind({});

CircleBig.args = {
  type: 'circleBig',
};
