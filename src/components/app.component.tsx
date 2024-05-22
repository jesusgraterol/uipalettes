import { useState } from 'react';
import { Header } from './header/header.component';
import { SubHeader } from './sub-header/sub-header.component';
import { DesktopSidenav } from './desktop-sidenav/desktop-sidenav.component';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Sub Header */}
      <SubHeader />

      {/* Content Outer Container */}
      <div className='flex h-max z-0'>
        {/* Desktop Sidenav */}
        <DesktopSidenav active='material-design-2' />

        {/* Content */}
        <main className='flex-1 items-start h-full p-3 sm:p-4'>
          <h1 className="text-5xl" >Hello world! {count}</h1>
          <button className='bg-sky-500 hover:bg-sky-700 text-white p-3' onClick={() => setCount(count + 1)}>
            <span className='md-icon'>add</span> <span>Hello there!</span>
          </button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </main>
      </div>
    </>
  );
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  App,
};
