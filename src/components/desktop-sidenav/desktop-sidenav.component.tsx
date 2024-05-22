import { UILibsService } from '../../shared/services/ui-libs/ui-libs.service';
import { SidenavItem } from '../../shared/components/sidenav-item/sidenav-item.component';
import { IDesktopSidenavProps } from './types';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the list of minified records
const records = UILibsService.getMinifiedRecords();





/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const DesktopSidenav = ({ active, onClick }: IDesktopSidenavProps) => (
  <section role='navigation'
            aria-label='Application Sidenav'
            className='hidden xl:block xl:w-72 2xl:w-80 self-stretch bg-white shadow-4 z-0'>
    {records.map((record) => <SidenavItem key={record.id}
                                          record={record}
                                          isActive={active === record.id}
                                          onClick={() => onClick(record.id)}/>)}
  </section>
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  DesktopSidenav,
};
