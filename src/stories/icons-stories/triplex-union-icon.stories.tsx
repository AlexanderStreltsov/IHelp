import { TriplexUnionIcon } from '../../ui/icons/triplex-union-icon';
import { IIconProps } from '../../ui/icons/utils';

export default {
  title: 'UI/Icons',
  component: TriplexUnionIcon,
  argTypes: {
    color: {
      type: 'string',
      description: 'Цвет контура для svg иконки',
      defaultValue: 'dark-blue',
      options: [
        'dark-blue',
        'white',
        `popup`,
        `inactive`,
        `partsPrimary`,
        `partsSecondary`,
        `partsActivePrimary`,
        `partsActiveSecondary`,
        `partsActiveAdditional`,
      ],
      mapping: {
        popup: '#fff',
        inactive: '#818c99',
        partsPrimary: '#2e3192',
        partsSecondary: '#9798c9',
        partsActivePrimary: '#0071bc',
        partsActiveSecondary: '#0091c7',
        partsActiveAdditional: '#00a99d',
      },
      control: {
        type: 'radio',
      },
    },
  },
};

// export const ActiveRequest = () => (
//   <ActiveRequestVersion1Icon color="dark-blue" />
// );

const Template = (args: IIconProps) => <TriplexUnionIcon {...args} />;

export const TriplexUnion = Template.bind({});
