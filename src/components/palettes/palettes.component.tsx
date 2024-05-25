import { useState } from 'react';
import { IHue } from '../../shared/services/ui-libs/types';
import { IPalettesProps } from './types';
import { ClipboardCard } from './clipboard-card.component';
import { Hues } from './hues.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Palettes = ({ active }: IPalettesProps) => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const [activeHex, setActiveHex] = useState<string | undefined >();



  /* **********************************************************************************************
   *                                        EVENT HANDLERS                                        *
   ********************************************************************************************** */

  const copyToClipboard = (hue: IHue) => {
    setActiveHex(hue.hex);
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(hue.hex).catch((e) => console.error(e));
    }
  };



  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <>
      {/* Clipboard Card */}
      <ClipboardCard hex={activeHex} />

      {/* Palettes */}
      <section className='grid justify-evenly gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {active.palettes.map((palette) => <Hues key={`${active.id}_${palette.name}`}
                                                palette={palette}
                                                copyToClipboard={copyToClipboard} />)}
      </section>
    </>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Palettes,
};
