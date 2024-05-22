import { ExternalLink } from 'lucide-react';
import { Toolbar } from '../../shared/components/toolbar/toolbar.component';
import { Button } from '../../shared/components/button/button.component';
import { ISubHeaderProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const SubHeader = ({ active }: ISubHeaderProps) => {
  const handleLinkClick = (): void => {
    window.open(active.url, '_blank', 'noopener noreferrer');
  };

  return (
    <Toolbar color='secondary' dropShadow={true}>
      <h1 className='text-white text-lg sm:text-xl font-medium'>{active.name}</h1>
      <span className='flex-1'></span>
      <Button color='secondary'
              rounded={true}
              onClick={handleLinkClick}
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
