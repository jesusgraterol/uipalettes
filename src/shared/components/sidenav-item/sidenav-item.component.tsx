import { ISidenavItemProps } from './types';


/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const SidenavItem = ({ record, isActive, onClick }: ISidenavItemProps) => (
  <button className='flex justify-start items-center w-full p-4 hover:bg-gray-100 disabled:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed'
          disabled={isActive}
          onClick={onClick}>
    <img src={record.logo} alt={record.name} className='w-6 mr-2' aria-hidden='true' /> {record.name}
  </button>
);




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  SidenavItem,
};
