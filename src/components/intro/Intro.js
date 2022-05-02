import { ColorModeProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import './intro.css';
import { useColorMode } from '@chakra-ui/react';
import mySvg from '../../../src/assets/intro_bg.svg';

function Intro() {
  const color = useColorMode();
  return (
    <Grid
      className="intro"
      id={color.colorMode}
      // style={{ backgroundImage: `url(${mySvg})` }}
    >
      Intro
    </Grid>
  );
}

export default Intro;
