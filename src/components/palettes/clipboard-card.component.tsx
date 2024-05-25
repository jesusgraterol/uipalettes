
import { useState, useEffect } from 'react';
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
  const [visible, setVisible] = useState(false);





  /* **********************************************************************************************
   *                                         SIDE EFFECTS                                         *
   ********************************************************************************************** */

  useEffect(() => {
    setVisible(false);
    let timeout: number;
    if (typeof hex === 'string') {
      setVisible(true);
      timeout = setTimeout(() => {
        setVisible(false);
      }, DURATION * 1000);
    }
    return () => {
      setVisible(false);
      clearTimeout(timeout);
    };
  }, [hex]);




  /* **********************************************************************************************
   *                                        EVENT HANDLERS                                        *
   ********************************************************************************************** */





  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <div role='tooltip'
        className={`fixed top-5 inset-x-0 z-20 w-64 md:w-72 mx-auto text-left bg-white shadow-6 transition-transform ${visible ? 'translate-y-0' : '-translate-y-32'}`}>
      <div className='flex justify-start items-center p-3'>
        <div className='w-11 h-11 rounded-md' style={{ backgroundColor: hex }}></div>
        <div className='ml-2'>
          <p className='font-semibold'>{hex}</p>
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
