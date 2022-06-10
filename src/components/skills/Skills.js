import { Grid, Text, Code, Box, SimpleGrid, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import './skills.css';
import { Logo } from '../../Logo';
// import { useColorMode } from '@chakra-ui/react';

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const color = useColorMode();
  return (
    <div className="skills section" id="skills">
      <div className="container">
        <div className="title">
          <Text>
            <Code>{`<Skills />`}</Code>
          </Text>
        </div>

        <SimpleGrid columns={2} spacing={5} className="grid">
          <Box>
            <a href="https://reactjs.org/" target={'_blank'}>
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
            <a href="https://reactjs.org/" target={'_blank'}>
              <h1>
                <strong>React.js</strong>
              </h1>
            </a>
            <p>
              React is a JavaScript library for building user interfaces. React
              is used to build single-page applications. React allows us to
              create reusable UI components.
            </p>
            <h1>
              <strong>Redux</strong>
            </h1>
            <p>
              Redux is a JavaScript library for managing and centralizing
              application state.
            </p>
          </Box>
          <Box>
            <h1>
              <strong>Web Languages</strong>
            </h1>
            <p>In web development, I have worked with HTML5/CSS/javascript.</p>
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

          <Box>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
                alt="c++.js"
              />
            </a>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                alt="c++.js"
              />
            </a>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                alt="java.js"
              />
            </a>
          </Box>
          <Box>
            <h1>
              <strong>Other Languages</strong>
            </h1>
            <p>
              I am familiar with c++, Python, and Java; with c++ being my
              strongest Language.
            </p>
          </Box>

          <Box>
            <h1>
              <strong>Familiar UI Libraries</strong>
            </h1>
            <p>
              <strong>Bootstrap UI</strong>
              <br />
              <strong>Google's Material UI</strong>
              <br />
              <strong>Chakra UI</strong>
            </p>
          </Box>
          <Box>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
                alt="Bootstrap.js"
              />
            </a>

            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://mui.com/static/logo.png"
                alt="materialUI.js"
              />
            </a>
            <a href="#">
              <Logo className="img" />
            </a>
          </Box>
          <Box>
            {' '}
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="figma"
              />
            </a>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224"
                alt="Notion"
              />
            </a>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                alt="github"
              />
            </a>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2101px-Adobe_Photoshop_Express_logo.svg.png"
                alt="photoshop"
              />
            </a>
          </Box>
          <Box>
            <h1>
              <strong>Other Dev&Design Tools</strong>
            </h1>
            <p>
              <strong>Figma:</strong> App design & wireframes.
              <br />
              <strong>Notion:</strong> Project Management & Team Collaboration.
              <br />
              <strong>GitHub Desktop:</strong> version Control & repos
              <br />
              <strong>Photoshop</strong>: visual file editor.
            </p>
          </Box>
          <Box>
            <h1>
              <strong>Currently Learning</strong>
            </h1>
            <p>
              <strong>Next.js</strong> React framework that gives you building
              blocks to create fast web applications by using server-side
              rendering.
            </p>
            <p>
              <strong>Framer Motion</strong> is an advanced animation library
              that makes creating animations easy.
            </p>
          </Box>
          <Box>
            <a href="#">
              <Image
                className="img"
                objectFit="scale-down"
                src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
                alt="next.js"
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
        </SimpleGrid>
      </div>
    </div>
  );
}

export default Skills;
