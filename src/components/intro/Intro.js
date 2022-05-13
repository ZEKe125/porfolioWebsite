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
import profile from '../../assets/profile.png';

// import mySvg from '../../../src/assets/intro_bg.svg';

function Intro() {
  return (
    <Grid className="intro" id="intro">
      <div className="title">
        <Text>
          <Code>{`<Intro />`}</Code>
        </Text>
      </div>

      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Center>
            <a
              className="profile"
              href="https://engineering.ucmerced.edu/"
              target={'_blank'}
            ></a>
          </Center>
        </Box>
        <Box>
          <h1 className="title">Interests</h1>
          <h1 className="body"></h1>
          <h1 className="body"> </h1>
        </Box>
        <Box>
          <h1 className="title">Education: </h1>
          <h1 className="body">University of Califronia, Merced</h1>
          <h1 className="body">B.S Computer Science and Enginnering </h1>
        </Box>
        <Box>
          <Center>
            <a href="https://engineering.ucmerced.edu/" target={'_blank'}>
              <Image
                className="img"
                objectFit="scale-down"
                src="https://caltrout.org/wp-content/uploads/2019/08/UC-merced-logo.png"
                alt="UCMlogo.js"
              />
            </a>
          </Center>
        </Box>
        <Box>hi</Box>
        <Box>hello </Box>
      </SimpleGrid>

      <SimpleGrid color="white" className="buttons">
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
      </SimpleGrid>
    </Grid>
  );
}

export default Intro;
