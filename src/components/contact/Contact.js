import React, { useEffect } from 'react';
import { Code } from '@chakra-ui/react';
// import ContactForm from './ContactForm';
import { FaEnvelope, FaWpforms, FaFileAlt } from 'react-icons/fa';
import './contact.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact section" id="contact">
      <div className="container">
        <div className="title">
          <Code>{`<Contact-Me />`}</Code>
        </div>
        <br />
        <div className="title">
          <h4>Feel free to contact me for proffesional inquiries.</h4>
        </div>

        <div className="buttons">
          <a href="mailto:ezelcuevas@gmail.com" rel="noreferrer">
            <FaEnvelope className="icon" />
            <p>Email</p>
          </a>
          <a
            href="https://www.myperfectresume.com/me/ezequiel-cuevas"
            rel="noreferrer"
            target={'_blank'}
          >
            <FaFileAlt className="icon" />
            <p>Resume</p>
          </a>
          <a
            rel="noreferrer"
            href="https://www.myperfectresume.com/me/ezequiel-cuevas/contact"
            target={'_blank'}
          >
            <FaWpforms className="icon" />
            <p>Contact Form</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
