import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Hero from './components/hero/Hero';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Intro />
      <Projects />
    </Box>
  );
}

export default App;
