import { UILibsService } from '../../services/ui-libs/ui-libs.service';
import { ISidenavItemProps } from './types';


/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const SidenavItem = ({ record, isActive, onClick }: ISidenavItemProps) => (
  <button className='flex justify-start items-center w-full p-4 hover:bg-gray-100 disabled:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed'
          disabled={isActive}
          onClick={onClick}>
    <img src={UILibsService.buildLogoPath(record.id)} alt={record.name} className='w-6 mr-2' aria-hidden='true' width="24" height="24" /> {record.name}
  </button>
);




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  SidenavItem,
};
