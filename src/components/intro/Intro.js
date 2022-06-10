import {
  Grid,
  Text,
  Code,
  Center,
  div,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import './intro.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="intro section" id="intro">
      <div className="container">
        <div className="title">
          <Code>{`<Intro />`}</Code>
        </div>

        <div className="center">
          <a
            className="profile"
            href="https://www.linkedin.com/in/ezequiel-cuevas99/"
            target={'_blank'}
          ></a>
        </div>

        <div >
          <h1>
            <strong>Interests:</strong>
            <h1 className="body">
              {' '}
              I'm interested in Remote Opportunities in Frontend Web
              Development. Preferably <strong>React.js</strong>, but I'm open to
              other frameworks.
            </h1>
            {/* <br></br> */}
            <h1 className="body">
              Currently, I'm learning Server-side rendering with{' '}
              <strong>Next.js</strong>, and advanced animations using{' '}
              <strong>Framer Motion.</strong>
            </h1>
          </h1>
        </div>

        <div >
          <h1>
            <strong>Education: </strong>
            <h1 className="body">University of California, Merced</h1>
            <h1 className="body">B.S Computer Science and Engineering </h1>
          </h1>
        </div>

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
      </div>
    </div>
  );
}

export default Intro;
