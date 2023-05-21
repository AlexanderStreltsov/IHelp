type TIconColor = 'white' | 'dark-blue';

export const getColor = (color: TIconColor) => {
  switch (color) {
    case 'white':
      return '#FBFDFF';
    case 'dark-blue':
      return '#2E3192';
    default:
      // eslint-disable-next-line no-case-declarations, @typescript-eslint/no-unused-vars
      const exhaustiveCheck: never = color;
      return '#2E3192';
  }
};

export interface IIconProps {
  color: TIconColor;
  size?: '24' | '17';
  className?: string;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void);
}
