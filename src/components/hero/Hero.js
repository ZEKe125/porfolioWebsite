import React from 'react';
import './Hero.css';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Grid, Text, Code } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export default function Hero() {
  const color = useColorMode();
  return (
    <Grid className="hero" id={color.colorMode}>
      <Text className="text">
        Zeke's <Code>{`<Portfolio/>`}</Code>
      </Text>
    </Grid>
  );
}
