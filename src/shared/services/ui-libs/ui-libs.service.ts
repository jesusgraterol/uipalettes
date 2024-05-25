import { hex } from 'wcag-contrast';
import { encodeError } from 'error-message-utils';
import { ERRORS } from '../../errors';
import {
  IUILibsService,
  IMinifiedRecord,
  ILibID,
  IRecord,
  IContrastScore,
  IPalette,
  IHue,
} from './types';
import RAW_DB from './db.json';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const UILibsServiceFactory = (): IUILibsService => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // foreground contrast colors
  const __LIGHT_FOREGROUND: string = '#FFFFFF';
  const __DARK_FOREGROUND: string = '#020617'; // slate-950

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





  /* **********************************************************************************************
   *                                     CONTRAST CALCULATORS                                     *
   ********************************************************************************************** */

  /**
   * Calculates the contrast score based on the ratio.
   * @param ratio
   * @returns IContrastScore
   */
  const __calculateContrastScore = (ratio: number): IContrastScore => {
    if (ratio >= 7) {
      return 'AAA';
    }
    if (ratio >= 4.5) {
      return 'AA';
    }
    if (ratio >= 3) {
      return 'AA L';
    }
    return 'A';
  };

  /**
   * Calculates the light and dark ratios based on a given hex code that will be used as background.
   * @param hexCode
   * @returns { lightRatio: number, darkRatio: number }
   */
  const __calculateRatios = (hexCode: string): { lightRatio: number, darkRatio: number } => ({
    lightRatio: hex(hexCode, __LIGHT_FOREGROUND),
    darkRatio: hex(hexCode, __DARK_FOREGROUND),
  });

  /**
   * Processes and scores a raw hue by performing all the contrast calculations.
   * @param hue
   * @returns IHue
   */
  const __processHue = (hue: IHue): IHue => {
    const { lightRatio, darkRatio } = __calculateRatios(hue.hex);
    const ratio = lightRatio > darkRatio ? lightRatio : darkRatio;
    return {
      ...hue,
      contrastRatio: parseFloat(ratio.toFixed(1)),
      score: __calculateContrastScore(ratio),
      lightForeground: lightRatio > darkRatio,
    };
  };

  /**
   * Processes all the hues within a palette.
   * @param palette
   * @returns IPalette
   */
  const __processPalette = (palette: IPalette): IPalette => ({
    ...palette,
    hues: palette.hues.map(__processHue),
  });

  /**
   * Processes a raw record and performs all the relevant calculations.
   * @param raw
   * @returns IRecord
   */
  const __processRecord = (raw: IRecord): IRecord => ({
    ...raw,
    palettes: raw.palettes.map(__processPalette),
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
    if (id) {
      const record = __DB.find((raw) => raw.id === id);
      if (!record) {
        throw new Error(encodeError(`The ID '${id}' was not found in the database.`, ERRORS.UNKNOWN_UI_LIB));
      }
      return __processRecord(record);
    }
    return __processRecord(__DB[0]);
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
