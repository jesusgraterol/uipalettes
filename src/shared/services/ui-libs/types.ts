

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Lib ID
 * Each library has a unique ID which can also be used to map the logos.
 */
type ILibID = 'ant-design' | 'bootstrap' | 'chakra' | 'mantine' | 'material-design-2' | 'nextui' |
'open-color' | 'radix' | 'react-suite' | 'tailwindcss';



/**
 * Minified Record
 * The essentials so the libraries can be listed.
 */
interface IMinifiedRecord {
  id: ILibID;
  name: string;
}



/**
 * Contrast Score
 * The level obtained by appliying the WCAG formula.
 */
type IContrastScore = 'A' | 'AA' | 'AAA';

/**
 * Hue
 * The object that contains the core data for a color's hue.
 */
interface IHue {
  name: string;
  hex: string;
  contrastRatio: string;
  normalScore: IContrastScore;
  largeScore: IContrastScore;
}

/**
 * Palette
 * The set of hues that comprise a color palette.
 */
interface IPalette {
  name: string;
  hues: IHue[];
}

/**
 * Record
 * The complete record of a UI Library which also includes the supported colors.
 */
interface IRecord {
  id: ILibID;
  name: string;
  url: string;
  palettes: IPalette[];
}



/**
 * UI Libs Service
 * Handles the reading and processing of the raw data so it can be properly displayed to the user.
 */
interface IUILibsService {
  // properties
  // ...

  // misc helpers
  buildLogoPath(id: ILibID): string,

  // retrievers
  getRecord(id?: ILibID): IRecord,
  getMinifiedRecords(): IMinifiedRecord[],
}




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ILibID,
  IMinifiedRecord,
  IRecord,
  IUILibsService,
};
