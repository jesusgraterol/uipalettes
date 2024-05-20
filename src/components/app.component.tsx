import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-5xl" >Hello world! {count}</h1>
      <button className='bg-sky-500 hover:bg-sky-700 text-white p-3' onClick={() => setCount(count + 1)}>
        <span className='md-icon'>add</span> <span>Hello there!</span>
      </button>
    </>
  );
};

export default App;
