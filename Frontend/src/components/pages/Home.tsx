import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className='pageContainer'>
        <h1>Esta es la pagina de inicio</h1>
      </div>
    </>
  );
}

export default Home;