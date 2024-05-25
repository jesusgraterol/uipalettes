import { ILibID } from '../../shared/services/ui-libs/types';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Mobile Sidenav Props
 * The props object that needs to be passed down.
 */
interface IMobileSidenavProps {
  active: ILibID,
  isOpened: boolean,
  closeSidenav: () => void,
  activateLib: (id: ILibID) => void,
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IMobileSidenavProps,
};
