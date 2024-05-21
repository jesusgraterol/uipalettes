import { Menu, Code } from 'lucide-react';
import { IconButton } from '../../shared/components/icon-button/icon-button.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Header = () => {
  const handleClick = () => {
    console.log('on handleClick');
  };

  return (
    <header className="h-20 flex justify-center items-center bg-primary px-2">
      <img className='max-w-48 h-auto'
            src='logo/logo-white.png'
            alt='uipalettes Logo'/>
      <span className="flex-1"></span>
      <IconButton kind='primary' onClick={handleClick}>
        <Code color="white" />
      </IconButton>
      <IconButton kind='primary' onClick={handleClick}>
        <Menu color="white" />
      </IconButton>
    </header>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Header,
};
