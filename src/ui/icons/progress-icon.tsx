import { getColor, IIconProps } from './utils';

export const ProgressIcon = ({ color, ...props }: IIconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 0C18.6863 3.20335e-08 21.3293 0.67634 23.6854 1.96666C26.0415 3.25697 28.0348 5.11972 29.4815 7.38315C30.9282 9.64658 31.7817 12.2378 31.9634 14.9179C32.145 17.5981 31.649 20.2808 30.521 22.7187C29.3929 25.1567 27.6693 27.2714 25.5088 28.8679C23.3484 30.4643 20.8209 31.4911 18.1592 31.8536C15.4975 32.2161 12.7873 31.9027 10.2787 30.9421C7.77001 29.9815 5.54358 28.4048 3.80467 26.3573L16 16V0Z"
      fill={getColor(color)}
    />
    <circle cx="16" cy="16" r="15.5" stroke={getColor(color)} />
  </svg>
);
