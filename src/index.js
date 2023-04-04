import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import KentuckyInventory from './MindfulnessTests/KentuckyInventory';
import MAAS from './MindfulnessTests/MAAS';
import Tasks from './MindfulnessTests/Tasks';
import TorontoMindfulnessScale from './MindfulnessTests/TorontoMindfulnessScale';
import LangerMindfulness from './MindfulnessTests/LangerMindfulness';
import PhilMindfulness from './MindfulnessTests/PhilMindfulness';
import StateMindfulness from './MindfulnessTests/StateMindfulness';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

        <Route index element={<App />} />
        <Route path="/pages/Home" element={<Home />} />
        
        <Route path="/MindfulnessTests/KentuckyInventory" element={<KentuckyInventory />} />
        <Route path="/MindfulnessTests/TorontoMindfulnessScale" element={<TorontoMindfulnessScale />} />
        <Route path="/MindfulnessTests/MAAS" element={<MAAS />} />
        <Route path="/MindfulnessTests/LangerMindfulness" element={<LangerMindfulness />} />
        <Route path="/MindfulnessTests/PhilMindfulness" element={<PhilMindfulness />} />
        <Route path="/MindfulnessTests/StateMindfulness" element={<StateMindfulness />} />

        <Route path="/MindfulnessTests/Tasks" element={<Tasks />} />


      </Routes>
      
  
  </BrowserRouter>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
