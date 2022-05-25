import React from 'react';
import { Grid, Text, Code } from '@chakra-ui/react';
import './footer.css';

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
    </Grid>
  );
}

export default Footer;
