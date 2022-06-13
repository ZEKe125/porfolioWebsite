import React from 'react';
import { Code } from '@chakra-ui/react';
import './navbar.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <Code>{`<Portfolio />`}</Code>
        </a>
      </div>
      {/* <div className="github">
        <a href="https://github.com/ZEKe125" target="_blank">
          <FaGithub className="icon" />
        </a>
      </div> */}

      <div className="buttons">
        <a href="https://github.com/ZEKe125" target="_blank" rel="noreferrer">
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ezequiel-cuevas99/"
          rel="noreferrer"
          target="_blank"
        >
          {' '}
          <FaLinkedin className="icon" />{' '}
        </a>{' '}
        <a href="mailto:ezelcuevas@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
