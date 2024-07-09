import { Menu, Code } from 'lucide-react';
import { Toolbar } from '../../shared/components/toolbar/toolbar.component';
import { Button } from '../../shared/components/button/button.component';
import { IHeaderProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Header = ({ displaySidenav }: IHeaderProps) => {
  /* **********************************************************************************************
   *                                         EVENT HANDLERS                                       *
   ********************************************************************************************** */

  /**
   * Opens the source code (GitHub) on a new tab.
   */
  const viewSourceCode = (): void => {
    window.open('https://github.com/jesusgraterol/uipalettes', '_blank', 'noopener noreferrer');
  };





  /* **********************************************************************************************
   *                                           COMPONENT                                          *
   ********************************************************************************************** */
  return (
    <Toolbar color='primary'>
      <img className='w-44 sm:w-48 md:w-52 lg:w-56 xl:w-60'
            src='logo/logo-white.png'
            alt='uipalettes Logo'
            width="176"
            height="44"/>
      <span className='flex-1'></span>
      <Button color='primary'
              className='hidden sm:flex'
              onClick={viewSourceCode}
              ariaLabel='Source code of the app'>
          <Code color='white' aria-hidden='true' /> <span>Source Code</span>
        </Button>
      <Button color='primary'
              rounded={true}
              className='sm:hidden'
              onClick={viewSourceCode}
              ariaLabel='Source code of the app'>
        <Code color='white' aria-hidden='true' />
      </Button>
      <Button color='primary'
              rounded={true}
              className='xl:hidden'
              onClick={displaySidenav}
              ariaLabel='Display Menu'>
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
