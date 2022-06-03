import React from 'react';
import { Button, Text, Code } from '@chakra-ui/react';
import './navbar.css';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
 
} from 'react-icons/fa';

function Navbar() {


  return (
    <div className="navbar">
      <div className="logo">
        
          <Code>{`<Portfolio />`}</Code>
      
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
