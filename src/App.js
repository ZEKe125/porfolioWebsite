import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Hero from './components/hero/Hero';
import { Logo } from './Logo';
import Intro from './components/intro/Intro';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <Logo h="40vmin" pointerEvents="none" /> */}
        <Hero />
        <Intro />
        <Text>
          Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
        </Text>
        <Link
          color="teal.500"
          href="https://github.com/ZEKe125"
          fontSize="2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
      </Box>
    </ChakraProvider>
  );
}

export default App;
