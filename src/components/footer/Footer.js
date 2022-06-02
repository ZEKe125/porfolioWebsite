import React from 'react';
import { Grid, Text, Code, SimpleGrid, Center } from '@chakra-ui/react';
import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <Grid
      className="footer"
      id="footer"
      // style={{ backgroundImage: `url(${mySvg})` }}
    >
      <div className="title">
        <Text>
          <Code>{`<Footer />`}</Code>
        </Text>
      </div>
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
          <a href="mailto:ezelcuevas@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </Center>
      </SimpleGrid>
    </Grid>
  );
}

export default Footer;
