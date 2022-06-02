import React from 'react';
import { Text, Code } from '@chakra-ui/react';
// import ContactForm from './ContactForm';
import { FaEnvelope, FaWpforms, FaFileAlt } from 'react-icons/fa';
import './contact.css';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <Code>{`<Contact-Me />`}</Code>
      </div>
      <br />
      <div className="title">
        <h4>Feel free to contact me for proffesional inquiries.</h4>
      </div>

      <div className="buttons">
        <a href="mailto:ezelcuevas@gmail.com">
          <FaEnvelope className="icon" />
          <p>Email</p>
        </a>
        <a
          href="https://www.myperfectresume.com/me/ezequiel-cuevas"
          target={'_blank'}
        >
          <FaFileAlt className="icon" />
          <p>Resume</p>
        </a>
        <a
          href="https://www.myperfectresume.com/me/ezequiel-cuevas/contact"
          target={'_blank'}
        >
          <FaWpforms className="icon" />
          <p>Contact Form</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
