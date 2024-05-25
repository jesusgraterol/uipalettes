import { useState } from 'react';
import { UILibsService } from '../shared/services/ui-libs/ui-libs.service';
import { ILibID } from '../shared/services/ui-libs/types';
import { Header } from './header/header.component';
import { SubHeader } from './sub-header/sub-header.component';
import { DesktopSidenav } from './desktop-sidenav/desktop-sidenav.component';
import { MobileSidenav } from './mobile-sidenav/mobile-sidenav.component';
import { Palettes } from './palettes/palettes.component';
import { Installer } from './installer/installer.component';
import { ScrollTop } from './scroll-top/scroll-top.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const App = () => {
  /* **********************************************************************************************
   *                                             STATE                                            *
   ********************************************************************************************** */
  const [active, setActive] = useState(UILibsService.getRecord());
  const [mobileSidenavOpened, setMobileSidenavOpened] = useState(false);





  /* **********************************************************************************************
   *                                         EVENT HANDLERS                                       *
   ********************************************************************************************** */

  /**
   * Displays or hides the mobile sidenav.
   */
  const toggleMobileSidenav = () => {
    setMobileSidenavOpened(!mobileSidenavOpened);
  };

  /**
   * Activates a given record by ID.
   * @param id
   * @returns void
   */
  const activateLib = (id: ILibID) => setActive(UILibsService.getRecord(id));





  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <>
      {/* Header */}
      <Header displaySidenav={toggleMobileSidenav} />

      {/* Sub Header */}
      <SubHeader active={active} />

      {/* Content Outer Container */}
      <div className='flex h-max z-0'>
        {/* Desktop Sidenav */}
        <DesktopSidenav active={active.id} onClick={activateLib} />

        {/* Content */}
        <main className='flex-1 items-start h-full p-3 sm:p-4 lg:p-5 xl:p-6 2xl:p-7'>
          <Palettes active={active} />
        </main>
      </div>

      {/* Mobile Sidenav */}
      <MobileSidenav active={active.id}
                      isOpened={mobileSidenavOpened}
                      closeSidenav={toggleMobileSidenav}
                      activateLib={activateLib} />

      {/* Installer */}
      <Installer />

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
