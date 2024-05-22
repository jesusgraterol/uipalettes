import { UILibsService } from '../../shared/services/ui-libs/ui-libs.service';
import { IDesktopSidenavProps } from './types';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the list of minified records
const records = UILibsService.getMinifiedRecords();





/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const DesktopSidenav = ({ active }: IDesktopSidenavProps) => {
  return (
    <section className='hidden xl:block w-80 self-stretch bg-white shadow-xl z-0'>
      {records.map((record) => (
        <button key={record.id}>
          <img src={record.logo} alt={record.name} /> {record.name}
        </button>
      ))}
    </section>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  DesktopSidenav,
};
