import { useState } from 'react';
import { UILibsService } from '../shared/services/ui-libs/ui-libs.service';
import { IUILibID } from '../shared/services/ui-libs/types';
import { Header } from './header/header.component';
import { SubHeader } from './sub-header/sub-header.component';
import { DesktopSidenav } from './desktop-sidenav/desktop-sidenav.component';
import { ScrollTop } from './scroll-top/scroll-top.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const App = () => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const [active, setActive] = useState(UILibsService.getRecord());





  /* **********************************************************************************************
   *                                         EVENT HANDLERS                                       *
   ********************************************************************************************** */

  /**
   * Displays the mobile sidenav.
   */
  const displaySidenav = () => {

  };

  /**
   * Activates a given record by ID.
   * @param id
   * @returns void
   */
  const activateLib = (id: IUILibID) => setActive(UILibsService.getRecord(id));





  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <>
      {/* Header */}
      <Header displaySidenav={displaySidenav} />

      {/* Sub Header */}
      <SubHeader active={active} />

      {/* Content Outer Container */}
      <div className='flex h-max z-0'>
        {/* Desktop Sidenav */}
        <DesktopSidenav active={active.id} onClick={activateLib} />

        {/* Content */}
        <main className='flex-1 items-start h-full p-3 sm:p-4'>
          <h1 className="text-5xl" >Hello world!</h1>
          <button className='bg-sky-500 hover:bg-sky-700 text-white p-3'>
            <span className='md-icon'>add</span> <span>Hello there!</span>
          </button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </main>
      </div>

      {/* Scroll Top */}
      <ScrollTop />
    </>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  App,
};
