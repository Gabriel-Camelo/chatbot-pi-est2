import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { FieldProvider } from './contexts/FieldContext';

function App(){

  return(
    <div 
      className='h-screen w-full caret-transparent'
    >
      <AuthProvider>
        <FieldProvider>
          <Outlet></Outlet>
        </FieldProvider>
      </AuthProvider>
      <Footer/>
    </div>
  )
}

export default App;