import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ChakraProvider>
    <ColorModeScript />
    <App />
  </ChakraProvider>
);
