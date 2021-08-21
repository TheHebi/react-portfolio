import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
