import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="Containers">
      <div className="App">
     
          <Header />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
