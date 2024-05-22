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
      <img className='w-44 sm:w-48 md:w-52 lg:w-56 xl:w-60'
            src='logo/logo-white.png'
            alt='uipalettes Logo'/>
      <span className='flex-1'></span>
      <Button color='primary' className='hidden sm:flex' onClick={handleClick}>
          <Code color='white' aria-hidden='true' /> <span>View Source Code</span>
        </Button>
      <Button color='primary'
              rounded={true}
              className='sm:hidden'
              aria-label='View Source Code'
              onClick={handleClick}>
        <Code color='white' aria-hidden='true' />
      </Button>
      <Button color='primary'
              rounded={true}
              className='xl:hidden'
              onClick={handleClick}
              aria-label='Display Menu'>
        <Menu color='white' aria-hidden='true' />
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
