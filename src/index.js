// import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ChakraProvider>
    <App  />
  </ChakraProvider>
);
