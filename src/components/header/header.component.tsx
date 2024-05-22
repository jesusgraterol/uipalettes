import { Menu, Code } from 'lucide-react';
import { Toolbar } from '../../shared/components/toolbar/toolbar.component';
import { Button } from '../../shared/components/button/button.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Header = () => {
  const handleClick = () => {
    console.log('on handleClick');
  };

  return (
    <Toolbar color='primary'>
      <img className='w-44 sm:w-48 md:w-52'
            src='logo/logo-white.png'
            alt='uipalettes Logo'/>
      <span className="flex-1"></span>
      <Button color='primary' className='hidden sm:flex' onClick={handleClick}>
          <Code color="white" /> <span>View Code</span>
        </Button>
      <Button color='primary' className='sm:hidden' rounded={true} onClick={handleClick}>
        <Code color="white" />
      </Button>
      <Button color='primary' rounded={true} onClick={handleClick}>
        <Menu color="white" />
      </Button>
    </Toolbar>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Header,
};
