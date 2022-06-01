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
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';

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
          <h1 className="title">
            <strong>Interests:</strong>
          </h1>
          <h1 className="body">
            {' '}
            I'm interested in Remote Opportunities in Frontend Web Development.
            Preferably <strong>React.js</strong>, but I'm open to other
            frameworks.
          </h1>
          <br></br>
          <h1 className="body">
            Currently, I'm learning Server-side rendering with{' '}
            <strong>Next.js</strong>, and advanced animations using{' '}
            <strong>Framer Motion.</strong>
          </h1>
          <h1 className="body"> </h1>
        </Box>
        <Box>
          <h1 className="title">
            <strong>Education: </strong>
          </h1>
          <h1 className="body">University of California, Merced</h1>
          <h1 className="body">B.S Computer Science and Engineering </h1>
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
        {/* <Box>hi</Box>
        <Box>hello </Box> */}
      </SimpleGrid>

      <SimpleGrid color="white" className="buttons">
        <Center>
          <a href="https://github.com/ZEKe125" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequiel-cuevas99/"
            target="_blank"
          >
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
