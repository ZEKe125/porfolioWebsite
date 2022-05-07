import React from 'react';
import { Grid, Text, Code } from '@chakra-ui/react';
import './contact.css';

function Contact() {
  return (
    <Grid className="contact" id="contact">
      <div className="title">
        <Text>
          <Code>{`<Contact-Me />`}</Code>
        </Text>
      </div>
    </Grid>
  );
}

export default Contact;
