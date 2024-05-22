

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * UI Lib ID
 * Each library has a unique ID which can also be used to map the logos.
 */
type IUILibID = 'ant-design' | 'bootstrap' | 'chakra' | 'mantine' | 'material-design-2' | 'nextui' |
'open-color' | 'radix' | 'react-suite' | 'tailwindcss';

/**
 * UI Lib Raw Record
 * The raw object that is stored in the local database.
 */
interface IUILibRawRecord {
  id: IUILibID,
  name: string,
  url: string,
}

/**
 * UI Lib Minified Record
 * The essentials so the libraries can be listed.
 */
interface IUILibMinifiedRecord {
  id: IUILibID,
  name: string,
  logo: string,
}

/**
 * UI Lib Record
 * The complete record of a UI Library which also includes the supported colors.
 */
interface IUILibRecord extends IUILibMinifiedRecord {
  url: string
}

/**
 * UI Libs Service
 * Handles the reading and processing of the raw data so it can be properly displayed to the user.
 */
interface IUILibsService {
  // properties
  // ...

  // retrievers
  getRecord(id?: IUILibID): IUILibRecord,
  getMinifiedRecords(): IUILibMinifiedRecord[],
}




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IUILibID,
  IUILibRawRecord,
  IUILibMinifiedRecord,
  IUILibRecord,
  IUILibsService,
};
