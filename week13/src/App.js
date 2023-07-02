import React from 'react';
import './App.css';



// LoginForm component
const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <input className="login-input" type="text" placeholder="Username" />
      <input className="login-input" type="password" placeholder="Password" />
      <button className="login-button">Login</button>
    </div>
  );
};

// Navigation component
const Navigation = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-link">Link 1</a>
      <a href="#" className="nav-link">Link 2</a>
      <a href="#" className="nav-link">Link 3</a>
    </nav>
  );
};

// App component
const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default App;
