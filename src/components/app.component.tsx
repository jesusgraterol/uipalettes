import { useState } from 'react';
import { UILibsService } from '../shared/services/ui-libs/ui-libs.service';
import { IUILibID } from '../shared/services/ui-libs/types';
import { Header } from './header/header.component';
import { SubHeader } from './sub-header/sub-header.component';
import { DesktopSidenav } from './desktop-sidenav/desktop-sidenav.component';
import { MobileSidenav } from './mobile-sidenav/mobile-sidenav.component';
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
  const activateLib = (id: IUILibID) => setActive(UILibsService.getRecord(id));





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
        <main className='flex-1 items-start h-full p-3 sm:p-4'>
          <h1 className="text-5xl" >Hello world!</h1>
          <button className='bg-sky-500 hover:bg-sky-700 text-white p-3'>
            <span className='md-icon'>add</span> <span>Hello there!</span>
          </button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis facere quidem corporis quam soluta ea? Dolorum corrupti ab ut tempore ipsa, dignissimos quae quaerat sunt ea maxime, unde modi!</p>
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

      {/* Mobile Sidenav */}
      <MobileSidenav active={active.id}
                      isOpened={mobileSidenavOpened}
                      closeSidenav={toggleMobileSidenav}
                      activateLib={activateLib} />

      {/* Scroll Top */}
      <ScrollTop />

{/* Installer */}
<Installer />
    </>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  App,
};
