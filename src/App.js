import React from 'react';
import logo from './logo.svg';
import './App.css';

import RegistrationForm from './Components/RegistrationForm'
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <div className="App">
      <RegistrationForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
