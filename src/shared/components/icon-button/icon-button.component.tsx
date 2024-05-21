import { IIConButtonProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const IconButton = ({ kind, onClick, children } : IIConButtonProps) => {
  const bg = kind === 'primary' ? 'bg-primary hover:bg-neutral-900' : 'bg-secondary hover:bg-neutral-700';
  const btnClasses = `rounded-full p-4 ${bg} active:scale-75`;
  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  IconButton,
};
