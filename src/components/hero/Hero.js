import React from 'react';
import './Hero.css';
import { Grid, Text, Code } from '@chakra-ui/react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="text">
        Zeke's <Code>{`<Portfolio/>`}</Code>
        <p className="little">
          MobileFirst with <strong>React.js</strong> and a little{' '}
          <strong>Chakra UI</strong>
        </p>
        <p className="little">(Under Construction)</p>
      </div>
    </div>
  );
}
