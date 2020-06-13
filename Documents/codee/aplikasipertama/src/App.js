import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';

//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
      </switch>
    </BrowserRouter>




  );
}

export default App;
