
import { useState, useEffect } from 'react';
import { ClipboardCheck } from 'lucide-react';
import { IClipboardCardProps } from './types';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the number of seconds the card will be displayed for
const DURATION: number = 3;


/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const ClipboardCard = ({ hex }: IClipboardCardProps) => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const [activeHex, setActiveHex] = useState<string | undefined>();



  /* **********************************************************************************************
   *                                         SIDE EFFECTS                                         *
   ********************************************************************************************** */

  useEffect(() => {
    let outerTimeout: number;
    let innerTimeout: number;
    if (typeof hex === 'string') {
      outerTimeout = setTimeout(() => {
        setActiveHex(hex);
        innerTimeout = setTimeout(() => {
          setActiveHex(undefined);
        }, DURATION * 1000);
      }, 500);
    }
    return () => {
      setActiveHex(undefined);
      clearTimeout(outerTimeout);
      clearTimeout(innerTimeout);
    };
  }, [hex]);



  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <div role='tooltip'
        className={`fixed top-5 inset-x-0 z-20 w-64 md:w-72 mx-auto text-left bg-white shadow-6 transition-transform duration-500 ${activeHex ? 'translate-y-0' : '-translate-y-32'}`}>
      <div className='flex justify-start items-center p-3'>
        <div className='w-11 h-11 rounded-md' style={{ backgroundColor: activeHex }}></div>
        <div className='ml-2 flex-1'>
          <div className='flex justify-start items-center'>
            <p className='font-semibold'>{activeHex}</p>
            <span className='flex-1'></span>
            <ClipboardCheck color='black' />
          </div>
          <p className='text-slate-500 text-sm'>Copied to clipboard</p>
        </div>
      </div>
    </div>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  ClipboardCard,
};
