import React from 'react';

import { setAppElement } from 'react-modal';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FieldProvider } from './contexts/FieldContext';

import Footer from './components/Footer';
import { RefreshProvider } from './contexts/RefreshContext';

function App(){
  setAppElement('#root');

  return(
    <div 
      className='h-screen w-full caret-transparent'
    >
    <RefreshProvider>
      <AuthProvider>
        <FieldProvider>
          <Outlet></Outlet>
        </FieldProvider>
      </AuthProvider>
    </RefreshProvider>
      <Footer/>
    </div>
  )
}

export default App;