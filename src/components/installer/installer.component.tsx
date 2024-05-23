import { useState } from 'react';


/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Installer = () => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const [active, setActive] = useState();





  /* **********************************************************************************************
   *                                         SIDE EFFECTS                                         *
   ********************************************************************************************** */


  /* **********************************************************************************************
   *                                        EVENT HANDLERS                                        *
   ********************************************************************************************** */




  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <>
      <div role='tooltip'
            className='fixed bottom-5 inset-x-0 z-20 w-64 md:w-72 mx-auto bg-white shadow-6 hover:bg-gray-200 hover:cursor-pointer'>
        {/* Progress Bar */}
        <div className='absolute top-0 h-1 bg-primary' style={{ width: '100%' }}></div>

        {/* Content */}
        <div className=' flex justify-start items-center p-3'>
          <img src='installer/mobile-installer.png' alt='App Installer Icon' className='w-14 md:hidden' />
          <img src='installer/desktop-installer.png' alt='App Installer Icon' className='w-14 hidden md:block' />
          <div className='ml-2'>
            <p className='font-semibold'>Install App</p>
            <p className='text-slate-500 text-xs md:text-sm'>Speed up your interactions and enable offline mode.</p>
          </div>
        </div>
      </div>
    </>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Installer,
};
