import React from 'react';
import './App.css';
//Components
import Home from './components/pages/Home.tsx';
import Compostar from './components/Routes/compostar';
import Nosotros from './components/Routes/nosotros';
import Productos from './components/Routes/productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForms/LoginForms';
import Cuenta from './components/Routes/cuenta';
import RegisterForm from './components/RegisterForms/RegisterForm.jsx';


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
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/user-profile-settings" element={<Cuenta />} />
      </Routes >
    </div >
  );
};

export default App;