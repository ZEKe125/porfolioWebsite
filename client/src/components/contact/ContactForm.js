import React, { useState } from 'react';
import { Center, Input, Stack, Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import './contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="form-wrapper">
      <Center>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input id="email" placeholder="Email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="message">message:</FormLabel>
              <Input id="message" placeholder="message" />
            </FormControl>

            <Button type="submit">{status}</Button>
          </Stack>
        </form>
      </Center>
    </div>
  );
};

export default ContactForm;
