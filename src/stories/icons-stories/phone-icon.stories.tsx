import { PhoneIcon } from '../../ui/icons/phone-icon';
import { IIconProps } from '../../ui/icons/utils';

export default {
  title: 'UI/Icons',
  component: PhoneIcon,
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

const Template1 = (args: IIconProps) => <PhoneIcon {...args} />;

export const Phone = Template1.bind({});
