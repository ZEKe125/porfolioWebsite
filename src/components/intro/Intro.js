import { Grid, Text, Code, Center } from '@chakra-ui/react';
import React from 'react';
import './intro.css';
import {
  FaBeer,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaReact,
} from 'react-icons/fa';
import { Flex, Spacer } from '@chakra-ui/react';
// import mySvg from '../../../src/assets/intro_bg.svg';

function Intro() {
  return (
    <Grid className="intro" id="intro">
      <div className="title">
        <Text>
          <Code>{`<Intro />`}</Code>
        </Text>
      </div>
      <Flex color="white" className="buttons">
        <Center>
          <a href="https://github.com/ZEKe125" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a>
            <FaLinkedin className="icon" />
          </a>
          <a>
            <FaReact className="icon" />
          </a>
        </Center>
      </Flex>
    </Grid>
  );
}

export default Intro;
