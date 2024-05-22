import { MoveRight } from 'lucide-react';
import { IUILibID } from '../../shared/services/ui-libs/types';
import { UILibsService } from '../../shared/services/ui-libs/ui-libs.service';
import { Button } from '../../shared/components/button/button.component';
import { SidenavItem } from '../../shared/components/sidenav-item/sidenav-item.component';
import { IMobileSidenavProps } from './types';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the list of minified records
const records = UILibsService.getMinifiedRecords();





/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const MobileSidenav = ({
  active,
  isOpened,
  closeSidenav,
  activateLib,
}: IMobileSidenavProps) => {
  /* **********************************************************************************************
   *                                        EVENT HANDLERS                                        *
   ********************************************************************************************** */

  /**
   * Activates a given lib and closes the sidenav.
   * @param id
   */
  const __activateLib = (id: IUILibID) => {
    closeSidenav();
    activateLib(id);
  };





  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <>
      <div className={`fixed top-0 left-0 bottom-0 right-0 opacity-30 bg-black z-30 ${isOpened ? 'block' : 'hidden'}`} onClick={closeSidenav}></div>
      <section role='navigation'
                aria-label='Application Sidenav'
                id='mobileSidenav'
                className={`fixed top-0 right-0 w-64 h-full bg-white overflow-auto z-40 transition-transform duration-500 ${isOpened ? 'translate-x-0' : 'translate-x-80'}`}>
        <div className='flex items-center p-3'>
          <h3 className='text-xl'>UI Libraries</h3>
          <span className='flex-1'></span>
          <Button color='transparent' rounded onClick={closeSidenav}><MoveRight color='black' /></Button>
        </div>
        {records.map((record) => <SidenavItem key={record.id}
                                              record={record}
                                              isActive={active === record.id}
                                              onClick={() => __activateLib(record.id)}/>)}
      </section>
    </>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  MobileSidenav,
};
