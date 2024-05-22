import { IButtonProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Button = ({
  color,
  rounded = false,
  className = '',
  onClick,
  children,
} : IButtonProps) => {
  // background
  const bgClass = color === 'primary'
    ? 'bg-primary hover:bg-neutral-800 focus:bg-neutral-800 active:bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:ring-inset'
    : 'bg-secondary hover:bg-neutral-700 focus:bg-neutral-700 active:bg-neutral-700';

  // rounded
  const roundedClass = rounded ? 'rounded-full' : 'rounded-md';

  // component
  return (
    <button className={`text-white flex ${roundedClass} p-3 sm:p-4 ${bgClass} active:scale-90 ${className}`}
            onClick={onClick}>
      {children}
    </button>
  );
};




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Button,
};
