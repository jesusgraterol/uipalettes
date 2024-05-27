import { PropsWithChildren } from 'react';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

type IButtonColor = 'primary' | 'secondary' | 'transparent';

type IButtonProps = PropsWithChildren<{
  color: IButtonColor,
  rounded?: boolean,
  className?: string,
  ariaLabel: string,
  onClick: () => void
}>;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IButtonColor,
  IButtonProps,
};
