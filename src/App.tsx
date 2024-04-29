import React, { Component, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ActionWindow from './Components/ActionWindow';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import PaymentEntry from './Components/PaymentEntry';
import './Components/styles/main.scss';

export default function App() {

  const isAuth = 

  const getNormalRoute = (route: string, component: ReactElement) => {
    return <Route path={`/${route}`} element={component} />;
  }

  const getProtectedRoute = (route: string, component: ReactElement) => {
    return <Route path={`/${route}`} element={component} />;
  }

  return (
    <Router>
      <div className="main">
        <div className='app-container'>
          <Header />
          <Routes>
            {getNormalRoute("signup", <SignUp />)}
            {getNormalRoute("register", <SignUp />)}
            {getNormalRoute("signin", <Login />)}
            {getNormalRoute("login", <Login />)}
            {getNormalRoute("new-entry", <PaymentEntry />)}
            {getNormalRoute("", <ActionWindow />)}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
