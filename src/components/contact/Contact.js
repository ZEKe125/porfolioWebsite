import React from 'react';
import { Grid, Text, Code } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import './contact.css';

function Contact() {
  return (
    <Grid className="contact" id="contact">
      <div className="title">
        <Text>
          <Code>{`<Contact-Me />`}</Code>
        </Text>
      </div>
      {/* <ContactForm/> */}
    </Grid>
  );
}

export default Contact;
