import { ILibID } from '../../shared/services/ui-libs/types';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Desktop Sidenav Props
 * The props object that needs to be passed down.
 */
interface IDesktopSidenavProps {
  active: ILibID,
  onClick: (id: ILibID) => void
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IDesktopSidenavProps,
};
