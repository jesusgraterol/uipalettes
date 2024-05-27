import { useState, useEffect } from 'react';
import { SWService } from '../../shared/services/sw/sw.service';

/* **********************************************************************************************
 *                                           CONSTANTS                                          *
 ********************************************************************************************** */

// the approximate number of seconds the service worker takes to install
const SW_INSTALLATION_DURATION: number = 3;

// the number of seconds the installer can be displayed for
const DURATION: number = 3 * 1000;



/* **********************************************************************************************
 *                                            HELPERS                                           *
 ********************************************************************************************** */

/**
 * Calculates the width% of the progress bar based on the remaining time.
 * @param remaining
 * @returns string
 */
const getProgressBarWidth = (remaining: number): string => `${((remaining * 100) / DURATION).toFixed(2)}%`;



/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Installer = () => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const [visible, setVisible] = useState(false);
  const [remainingTime, setRemainingTime] = useState(DURATION);



  /* **********************************************************************************************
   *                                         SIDE EFFECTS                                         *
   ********************************************************************************************** */

  useEffect(() => {
    // init the installers duration
    let remaining: number = DURATION;

    // allow a small delay so the service worker is properly registered
    let intervalKey: number;
    const timeoutKey: number = setTimeout(() => {
      // check if the app can be installed
      const canBeInstalled: boolean = SWService.canAppBeInstalled();
      setVisible(canBeInstalled);

      // initialize the count down if it can be installed
      if (canBeInstalled) {
        intervalKey = setInterval(() => {
          remaining -= 1;
          setRemainingTime(remaining);
          if (remaining === 0) {
            setVisible(false);
            clearInterval(intervalKey);
          }
        }, 1);
      }
    }, SW_INSTALLATION_DURATION * 1000);
    return () => {
      clearInterval(timeoutKey);
      clearInterval(intervalKey);
    };
  }, []);



  /* **********************************************************************************************
   *                                        EVENT HANDLERS                                        *
   ********************************************************************************************** */

  const installApp = () => {
    setVisible(false);
    SWService.installApp();
  };



  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <button aria-label='Install Application'
            onClick={installApp}
            className={`fixed bottom-5 inset-x-0 z-20 w-64 md:w-72 mx-auto text-left bg-white shadow-6 hover:bg-gray-200 transition-transform duration-500 ${visible ? 'translate-y-0' : 'translate-y-40'}`}>
      {/* Progress Bar */}
      <div className='h-1 bg-primary' style={{ width: getProgressBarWidth(remainingTime) }}></div>

      {/* Content */}
      <div className='flex justify-start items-center p-3'>
        <img src='installer/mobile-installer.png' alt='App Installer Icon' className='w-11 md:hidden' />
        <img src='installer/desktop-installer.png' alt='App Installer Icon' className='w-11 hidden md:block' />
        <div className='ml-2'>
          <p className='font-semibold'>Install App</p>
          <p className='text-slate-500 text-sm'>uipalettes.web.app</p>
        </div>
      </div>
    </button>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Installer,
};
