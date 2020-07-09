import React from 'react';
import './App.css';
import './styles/style.css';

import Hero from './components/sections/Hero';
import Main from './components/sections/Main';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
