import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Toolbar } from '../../shared/components/toolbar/toolbar.component';
import { Button } from '../../shared/components/button/button.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const SubHeader = () => {
  const handleClick = () => {
    console.log('on handleClick');
  };

  return (
    <Toolbar color='secondary' dropShadow={true}>
      <Button color='secondary' rounded={true} onClick={handleClick} aria-label='Go Back'>
        <ArrowLeft color='white' aria-hidden='true' />
      </Button>
      <h1 className='text-white text-lg sm:text-xl font-medium'>Material Design 2</h1>
      <span className='flex-1'></span>
      <Button color='secondary'
              rounded={true}
              onClick={handleClick}
              aria-label='Open UI Library Website'>
        <ExternalLink color='white' aria-hidden='true' />
      </Button>
    </Toolbar>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  SubHeader,
};
