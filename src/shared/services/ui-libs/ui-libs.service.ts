import { encodeError } from 'error-message-utils';
import { ERRORS } from '../../errors';
import {
  IUILibsService,
  IMinifiedRecord,
  ILibID,
  IRecord,
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
  const __DB = <IRecord[]>RAW_DB;





  /* **********************************************************************************************
   *                                         MISC HELPERS                                         *
   ********************************************************************************************** */

  /**
   * Builds the path for a library's logo
   * @param id
   * @returns string
   */
  const buildLogoPath = (id: ILibID): string => `ui-libs-logos/${id}.png`;

  /**
   * Processes a raw record and performs all the relevant calculations.
   * @param raw
   * @returns IUILibRecord
   */
  const __processRecord = (raw: IRecord): IRecord => ({
    ...raw,
    // @TODO
  });





  /* **********************************************************************************************
   *                                          RETRIEVERS                                          *
   ********************************************************************************************** */

  /**
   * Retrieves a full and processed record by ID. If no ID is provided, it returns the first record.
   * @param id
   * @returns IRecord
   */
  const getRecord = (id?: ILibID): IRecord => {
    let record: IRecord | undefined = __DB[0];
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
   * @returns IMinifiedRecord[]
   */
  const getMinifiedRecords = (): IMinifiedRecord[] => __DB.map(
    (record) => ({ id: record.id, name: record.name }),
  );





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    // ...

    // misc helpers
    buildLogoPath,

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
