import { encodeError } from 'error-message-utils';
import { ERRORS } from '../../errors';
import {
  IUILibsService,
  IUILibRawRecord,
  IUILibMinifiedRecord,
  IUILibID,
  IUILibRecord,
} from './types';
import RAW_DB from './db.json';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const UILibsServiceFactory = (): IUILibsService => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // copy of the raw database
  const __DB = <IUILibRawRecord[]>RAW_DB;





  /* **********************************************************************************************
   *                                         MISC HELPERS                                         *
   ********************************************************************************************** */

  /**
   * Builds the path for a library's logo
   * @param id
   * @returns string
   */
  const __buildLogoPath = (id: IUILibID): string => `ui-libs-logos/${id}.png`;

  /**
   * Processes a raw record and performs all the relevant calculations.
   * @param raw
   * @returns IUILibRecord
   */
  const __processRecord = (raw: IUILibRawRecord): IUILibRecord => ({
    ...raw,
    logo: __buildLogoPath(raw.id),
  });





  /* **********************************************************************************************
   *                                          RETRIEVERS                                          *
   ********************************************************************************************** */

  /**
   * Retrieves a full and processed record by ID. If no ID is provided, it returns the first record.
   * @param id
   * @returns IUILibRecord
   */
  const getRecord = (id?: IUILibID): IUILibRecord => {
    let record: IUILibRawRecord | undefined = __DB[0];
    if (id) {
      record = __DB.find((raw) => raw.id === id);
      if (!record) {
        throw new Error(encodeError(`The ID '${id}' was not found in the database.`, ERRORS.UNKNOWN_UI_LIB));
      }
    }
    return __processRecord(record);
  };

  /**
   * Retrieves the list of minified records
   * @returns IUILibMinifiedRecord[]
   */
  const getMinifiedRecords = (): IUILibMinifiedRecord[] => (
    __DB.map((record) => ({ id: record.id, name: record.name, logo: __buildLogoPath(record.id) }))
  );





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    // ...

    // retrievers
    getRecord,
    getMinifiedRecords,
  });
};





/* ************************************************************************************************
 *                                        GLOBAL INSTANCE                                         *
 ************************************************************************************************ */
const UILibsService = UILibsServiceFactory();





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  UILibsService,
};
