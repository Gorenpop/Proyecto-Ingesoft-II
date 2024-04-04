import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/pages/Home';
import Compostar from './components/Routes/compostar';
import Nosotros from './components/Routes/nosotros';
import Productos from './components/Routes/productos';
import LoginForm from './components/LoginForms/LoginForms';
import Cuenta from './components/Routes/cuenta';


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Compost-with-us" element={<Compostar />} />
        <Route path="/profile" element={<Cuenta />} />
        <Route path="/us" element={<Nosotros />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </div >
  );
};

export default App;