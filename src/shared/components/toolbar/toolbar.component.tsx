import { IToolbarProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Toolbar = ({ color, dropShadow = false, children }: IToolbarProps) => {
  // color
  const colorClass = color === 'primary' ? 'bg-primary' : 'bg-secondary';

  // shadow
  const shadowClass = dropShadow ? 'shadow-6' : 'shadow-none';

  // component
  return (
    <header className={`h-16 sm:h-20 flex justify-around items-center ${colorClass} ${shadowClass} px-2 z-10 relative`}>
      {children}
    </header>
  );
};




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Toolbar,
};
