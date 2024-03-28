import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ActionWindow from './Components/ActionWindow';
import SignUp from './Components/Signup';
import SignIn from './Components/SignIn';
import PaymentEntry from './Components/PaymentEntry';
import './Components/styles/main.scss'

export default function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/new-entry" element={<PaymentEntry />} />
          <Route path="/" element={<ActionWindow />} />
        </Routes>
      </div>
    </Router>
  );
}
