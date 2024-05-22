import { PropsWithChildren } from 'react';
import { IComponentColor } from '../../types';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

type IButtonProps = PropsWithChildren<{
  color: IComponentColor,
  rounded?: boolean,
  className?: string,
  onClick: () => void
}>;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IButtonProps,
};
