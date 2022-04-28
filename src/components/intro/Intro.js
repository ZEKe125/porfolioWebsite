import { ColorModeProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import './intro.css';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';

function Intro() {
  const color = useColorMode();
  return (
    <Grid className="intro" id={color.colorMode}>
      Intro
    </Grid>
  );
}

export default Intro;
