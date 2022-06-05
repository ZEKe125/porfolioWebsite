import React from 'react';
import './Hero.css';
import { Code } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FaChess,
  FaChessKnight,
  FaCogs,
  FaFolder,
  FaUserCheck,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="hero">
      <div className="text">
        Zeke's <Code>{`<Portfolio/>`}</Code>
        <p className="little">
          MobileFirst with <strong>React.js</strong> and a little{' '}
          <strong>Chakra UI</strong>
        </p>
        <p className="little">(Under Construction)</p>
      </div>
      <div className="nav">
        <Link to="/intro">
          <FaUserCheck className="icon" />
          <Code>{`<Intro/>`}</Code>
        </Link>
        <Link to="/skills">
          <FaChessKnight className="icon" />
          <Code>{`<Skills/>`}</Code>
        </Link>
        <Link to="/projects">
          <FaFolder className="icon" />
          <Code>{`<Projects/>`}</Code>
        </Link>
      </div>
    </div>
  );
}
