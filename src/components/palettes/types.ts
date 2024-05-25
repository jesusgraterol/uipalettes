import { IHue, IPalette, IRecord } from '../../shared/services/ui-libs/types';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

interface IPalettesProps {
  active: IRecord;
}

interface IHuesProps {
  palette: IPalette;
  copyToClipboard(hue: IHue): void;
}


/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IPalettesProps,
  IHuesProps,
};
