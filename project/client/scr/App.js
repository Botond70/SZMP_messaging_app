import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-bg">
      <div className="login-container">
        <h1 className="title">DEIKTALK</h1>
        <input className="input" type="text" placeholder="USR" />
        <input className="input" type="password" placeholder="PSW" />
        <button className="login-btn">LOG IN</button>
        <div className="register-link">REGISTER</div>
      </div>
    </div>
  );
}

export default App;
