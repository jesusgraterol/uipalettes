import { IUILibID } from '../../shared/services/ui-libs/types';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Desktop Sidenav Props
 * The props object that needs to be passed down.
 */
interface IDesktopSidenavProps {
  active: IUILibID,
  onClick: (id: IUILibID) => void
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IDesktopSidenavProps,
};
