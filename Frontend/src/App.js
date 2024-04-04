import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.tsx';
import LoginForm from './components/LoginForms/LoginForms';
import RegisterForm from './components/RegisterForms/RegisterForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};


export default App;