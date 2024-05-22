import { IUILibID } from '../../shared/services/ui-libs/types';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Mobile Sidenav Props
 * The props object that needs to be passed down.
 */
interface IMobileSidenavProps {
  active: IUILibID,
  isOpened: boolean,
  closeSidenav: () => void,
  activateLib: (id: IUILibID) => void,
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IMobileSidenavProps,
};
