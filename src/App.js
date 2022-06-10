import React from 'react';
// import { div } from '@chakra-ui/react';
import Hero from './components/hero/Hero';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      {/* <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
