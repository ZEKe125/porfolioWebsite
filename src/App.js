import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './components/hero/Hero';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
