import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Main from './Pages/Main';
import Error from './Pages/Error';
import About from './Pages/About';
import Contact from './Pages/Contact';

export function AppRoutes(){
  return(
    <Routes>

      <Route path="/" element={<Main />} />

      <Route path="/sobre" element={<About />} />

      <Route path="/contato" element={<Contact />} />

      <Route path="*" element={<Error />} />

    </Routes>
  )
}