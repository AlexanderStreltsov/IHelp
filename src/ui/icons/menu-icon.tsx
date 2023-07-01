import { getColor, IIconProps } from './utils';

export const MenuIcon = ({ color, ...props }: IIconProps) => (
  <svg
    width="21"
    height="11"
    viewBox="0 0 21 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.6986 0.61109H0.301484C0.100527 0.61109 0 0.50925 0 0.305545C0 0.10184 0.100527 0 0.301484 0H20.6986C20.8995 0 21 0.10184 21 0.305545C21 0.407398 20.8995 0.61109 20.6986 0.61109Z"
      fill={getColor(color)}
    />
    <path
      d="M20.6986 5.80573H0.301484C0.100527 5.80573 0 5.70389 0 5.50019C0 5.29648 0.100527 5.19458 0.301484 5.19458H20.6986C20.8995 5.19458 21 5.29648 21 5.50019C21 5.70389 20.8995 5.80573 20.6986 5.80573Z"
      fill={getColor(color)}
    />
    <path
      d="M20.6986 11H0.301484C0.100527 11 0 10.8982 0 10.6945C0 10.4908 0.100527 10.3889 0.301484 10.3889H20.6986C20.8995 10.3889 21 10.4908 21 10.6945C21 10.8982 20.8995 11 20.6986 11Z"
      fill={getColor(color)}
    />
  </svg>
);
