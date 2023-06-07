import React from 'react';
import { ElementColors } from './../../common/variables';

type TIconColor = 'white' | 'dark-blue' | ElementColors;

export const getColor = (color: TIconColor) => {
  switch (color) {
    case 'white':
      return ElementColors.primary;
    case 'dark-blue':
      return ElementColors.partsPrimary;
    case ElementColors.primary:
      return ElementColors.primary;
    case ElementColors.popup:
      return ElementColors.popup;
    case ElementColors.inactive:
      return ElementColors.inactive;
    case ElementColors.partsPrimary:
      return ElementColors.partsPrimary;
    case ElementColors.partsSecondary:
      return ElementColors.partsSecondary;
    case ElementColors.partsActivePrimary:
      return ElementColors.partsActivePrimary;
    case ElementColors.partsActiveSecondary:
      return ElementColors.partsActiveSecondary;
    case ElementColors.partsActiveAdditional:
      return ElementColors.partsActiveAdditional;
    case ElementColors.urgent:
      return ElementColors.urgent;

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
