import { getColor, IIconProps } from './utils';
import { ElementColors } from '../../common/variables';

export const UpperTriangleIcon = ({ color, ...props }: IIconProps) => (
  <svg
    width="29"
    height="14"
    viewBox="0 0 29 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.5 0L1.94263 10.5H27.0574L14.5 0Z" fill={getColor(color)} />
    <path
      d="M20.2816 8.92725C20.0112 8.92725 19.7409 8.92729 19.7409 8.75167L14.6025 4.18552L9.46421 8.75167C9.19377 8.92729 8.65284 9.10287 8.3824 8.92725C8.11197 8.75162 7.8416 8.40044 8.11203 8.22482L13.7911 3.13172C14.0615 2.95609 14.8728 2.95609 15.1433 3.13172L20.8223 8.22482C21.0928 8.40044 21.0928 8.75162 20.552 8.92725H20.2816Z"
      fill={ElementColors.primary}
    />
  </svg>
);
