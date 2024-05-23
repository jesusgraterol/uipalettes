import { IButtonColor, IButtonProps } from './types';

/* ************************************************************************************************
 *                                            HELPERS                                             *
 ************************************************************************************************ */

/**
 * Builds the list of classes that will be applied to a button based on the provided color.
 * @param color
 * @returns string
 */
const getBackgroundClass = (color: IButtonColor) => {
  switch (color) {
    case 'primary':
      return 'bg-primary hover:bg-neutral-800 focus:bg-neutral-800 active:bg-neutral-800 focus:outline-none';
    case 'secondary':
      return 'bg-secondary hover:bg-neutral-700 focus:bg-neutral-700 active:bg-neutral-700 focus:outline-none';
    case 'transparent':
      return 'bg-transparent hover:bg-neutral-300 focus:bg-neutral-300 active:bg-neutral-300 focus:outline-none';
    default:
      throw new Error(`The button color '${color}' is not supported.`);
  }
};





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
  const bgClass = getBackgroundClass(color);

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
