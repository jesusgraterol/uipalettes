import { useState, useEffect } from 'react';
import { SWService } from 'sw-service';

/* **********************************************************************************************
 *                                           CONSTANTS                                          *
 ********************************************************************************************** */

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
      // if the app can be installed, show the install button and init the visibility count down
      if (SWService.installer && SWService.installer.canAppBeInstalled()) {
        setVisible(true);
        intervalKey = setInterval(() => {
          remaining -= 1;
          setRemainingTime(remaining);
          if (remaining === 0) {
            setVisible(false);
            clearInterval(intervalKey);
          }
        }, 1);
      }
    }, SWService.registrationDurationSeconds * 1000);
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
    if (SWService.installer?.canAppBeInstalled()) {
      SWService.installer.installApp();
    }
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
        <img src='installer/mobile-installer.png' alt='App Installer Icon' className='w-11 md:hidden' width="44" height="44" />
        <img src='installer/desktop-installer.png' alt='App Installer Icon' className='w-11 hidden md:block' width="44" height="44" />
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
