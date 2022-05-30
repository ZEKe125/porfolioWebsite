import React from 'react';
import { Button, Text, Code } from '@chakra-ui/react';
import './navbar.css';
import {
  FaBeer,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaReact,
} from 'react-icons/fa';

function Navbar() {
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
        <a>
          {' '}
          <FaLinkedin className="icon" />{' '}
        </a>{' '}
        <a>
          <FaReact className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
