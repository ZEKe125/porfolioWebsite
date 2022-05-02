import React from 'react';
import { Button, Text, Code } from '@chakra-ui/react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Text className="text">
        <Code>{`<Portfolio />`}</Code>
      </Text>

      <div className="buttons">
        <Button>link</Button>
        <Button>link</Button>
        <Button>link</Button>
      </div>
    </div>
  );
}

export default Navbar;
