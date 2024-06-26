
import { useState, useRef, useEffect } from 'react';
import { ClipboardCheck } from 'lucide-react';
import { IClipboardCardProps } from './types';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the number of seconds the card will be displayed for
const DURATION: number = 5;


/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const ClipboardCard = ({ hex }: IClipboardCardProps) => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const activeHex = useRef<string | undefined>(hex);
  const [visible, setVisible] = useState(false);



  /* **********************************************************************************************
   *                                         SIDE EFFECTS                                         *
   ********************************************************************************************** */

  useEffect(() => {
    let outerTimeout: number;
    let innerTimeout: number;
    let exitTimeout: number;
    if (typeof hex === 'string') {
      // apply a delay if there is an active hex so it can be hidden correctly
      if (activeHex.current) {
        outerTimeout = setTimeout(() => {
          activeHex.current = hex;
          setVisible(true);
          innerTimeout = setTimeout(() => {
            setVisible(false);
            exitTimeout = setTimeout(() => {
              activeHex.current = undefined;
            }, 500);
          }, DURATION * 1000);
        }, 500);
      } else {
        activeHex.current = hex;
        setVisible(true);
        innerTimeout = setTimeout(() => {
          setVisible(false);
          exitTimeout = setTimeout(() => {
            activeHex.current = undefined;
          }, 500);
        }, DURATION * 1000);
      }
    }
    return () => {
      setVisible(false);
      clearTimeout(outerTimeout);
      clearTimeout(innerTimeout);
      clearTimeout(exitTimeout);
    };
  }, [hex]);



  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <div role='tooltip'
        className={`fixed top-5 inset-x-0 z-20 w-64 md:w-72 mx-auto text-left bg-white shadow-6 transition-transform duration-500 ${visible ? 'translate-y-0' : '-translate-y-32'}`}>
      <div className='flex justify-start items-center p-3'>
        <div className='w-11 h-11 rounded-md' style={{ backgroundColor: activeHex.current }}></div>
        <div className='ml-2 flex-1'>
          <div className='flex justify-start items-center'>
            <p className='font-semibold'>{activeHex.current}</p>
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
