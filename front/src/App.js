import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App(){

  return(
    <div className='h-screen w-full caret-transparent'>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;