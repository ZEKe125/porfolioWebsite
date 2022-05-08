import {
  Grid,
  Text,
  Code,
  Center,
  Box,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
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

      <SimpleGrid columns={2} spacing={10} className="grid">
        <Box>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://caltrout.org/wp-content/uploads/2019/08/UC-merced-logo.png"
              alt="react.js"
            />
          </a>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/UC_Merced_logo.svg/1200px-UC_Merced_logo.svg.png"
              alt="redux.js"
            />
          </a>
        </Box>

        <Box></Box>
      </SimpleGrid>
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
