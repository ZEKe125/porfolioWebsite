import React from 'react';
import { Button, Text, Code } from '@chakra-ui/react';
import './navbar.css';
import {
  FaBeer,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaReact,
} from 'react-icons/fa';

function Navbar() {
  const ScrollProjects = () => {
    console.log('hii');
    window.scrollTo({
      top: 4460,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Text>
          <Code>{`<Portfolio />`}</Code>
        </Text>
      </div>

      <div className="github">
        <a href="https://github.com/ZEKe125" target="_blank">
          <FaGithub className="icon" />
        </a>
      </div>

      <div className="buttons">
        <a href="https://github.com/ZEKe125" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ezequiel-cuevas99/"
          target="_blank"
        >
          {' '}
          <FaLinkedin className="icon" />{' '}
        </a>{' '}
        <a href='mailto:ezelcuevas@gmail.com'>
          <FaEnvelope className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
