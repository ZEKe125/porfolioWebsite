import React from 'react';
import './Hero.css';
// import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Grid, Text, Code } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export default function Hero() {
  const color = useColorMode();
  return (
    <Grid className="hero" id={color.colorMode}>
      <Text className="text">
        Zeke's <Code>{`<Portfolio/>`}</Code>
        <p className="little">
          MobileFirst with <strong>React.js</strong> and a little{' '}
          <strong>Chakra UI</strong>
        </p>
        <p className="little">(Under Construction)</p>
      </Text>
    </Grid>
  );
}
