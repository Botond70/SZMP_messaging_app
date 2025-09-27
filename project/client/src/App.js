import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Login';
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chats" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
