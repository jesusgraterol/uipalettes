import { IToolbarProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Toolbar = ({ color, dropShadow = false, children }: IToolbarProps) => {
  // height
  const heightClass = 'h-16 sm:h-20';

  // color
  const colorClass = color === 'primary' ? 'bg-primary' : 'bg-secondary';

  // shadow
  const shadowClass = dropShadow ? 'shadow-lg' : 'shadow-none';

  // component
  return (
    <header className={`${heightClass} flex justify-around items-center ${colorClass} ${shadowClass} px-2`}>
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
