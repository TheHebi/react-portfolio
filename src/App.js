import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <About />
        {/* <Resume /> */}
        {/* <Portfolio /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
