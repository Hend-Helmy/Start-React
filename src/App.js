import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Copyright from './Components/Copyright/Copyright';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';





class App extends Component {

  render() {
    return <>
      <Navbar />
      <Outlet/>
      <Copyright/>

    
    </>;
  }
}

export default App;
