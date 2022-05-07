import { Grid, Text, Code, Box, SimpleGrid, Image } from '@chakra-ui/react';
import React from 'react';
import './skills.css';
import { Logo } from '../../Logo';
// import { useColorMode } from '@chakra-ui/react';

function Skills() {
  //   const color = useColorMode();
  return (
    <Grid className="skills" id="skills">
      <div className="title">
        <Text>
          <Code>{`<Skills />`}</Code>
        </Text>
      </div>

      <SimpleGrid columns={2} spacing={10} className="grid">
        <Box>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react.js"
            />
          </a>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://www.vergic.com/wpsitefiles_de3fxs/wp-content/uploads/2017/04/logo.png"
              alt="redux.js"
            />
          </a>
        </Box>

        <Box>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt="html.js"
            />
          </a>

          <a href="#">
            {' '}
            <Image
              className="img"
              objectFit="scale-down"
              src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
              alt="css.js"
            />
          </a>

          <a href="#">
            {' '}
            <Image
              className="img"
              objectFit="scale-down"
              src="https://d2gdtie5ivbdow.cloudfront.net/media/images/javascript.png"
              alt="javascript.js"
            />
          </a>
        </Box>
        <Box></Box>
        <Box>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              alt="react.js"
            />
          </a>
          <a href="#">
            {' '}
            <Image
              className="img"
              objectFit="scale-down"
              src="https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png"
              alt="framerMotion"
            />
          </a>
        </Box>
        <Box>
          <a href="#">
            <Image
              className="img"
              objectFit="scale-down"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
              alt="react.js"
            />
          </a>

          <a href="#">
            {' '}
            <Image
              className="img"
              objectFit="scale-down"
              src="https://mui.com/static/logo.png"
              alt="react.js"
            />
          </a>
          <a href="#">
            <Logo className="img" />
          </a>
        </Box>
        <Box></Box>
      </SimpleGrid>
    </Grid>
  );
}

export default Skills;
