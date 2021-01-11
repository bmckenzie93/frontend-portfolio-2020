import React from 'react'
import Container from '../../UI/Container/Container'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Submit from '../../UI/Form/Input/Submit'
import TextArea from '../../UI/Form/Input/TextArea'
import Heading from '../../UI/Heading/Heading'
import Wedge from '../../UI/Wedge/Wedge'
import styles from './Contact.module.css'

import * as emailjs from 'emailjs-com'

const Contact = () => {
  // EMAIL JS
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_template', '#contactForm', 'user_k4ld27wqjmbJxvHYci9cB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  // FORM VALIDATION
  const validateInput = (e) => {

    if(document.getElementById('name').value === '') {
      alert('Please enter your name')
    } else if(document.getElementById('email').value === '') {
      alert('Please enter your email')
    } else if(document.getElementById('message').value === '') {
      alert('Please enter a message')
    } else(sendEmail(e))
  }


  return (
    <>
      <section 
        className={styles.Contact}
        id='contact' >
      <Wedge />
        <Heading 
          title="contact"
          color='#fff' />

        <p style={{
          textAlign: 'center', 
          marginBottom: '3rem',
          color: '#04c2c9'
        }}>

            Have a question or want to work together?
        </p>

        <Container size="Small">
          <Form 
            onSubmit={sendEmail}
            id='contactForm'>

            <Input 
              type="text"
              name="name"
              id="name"
              placeholder="Name" />

            <Input 
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email" />

            <TextArea
              name="message"
              id="message"
              placeholder="Your Message">
            </TextArea>

            <Submit
              onClick={validateInput} />

          </Form>
        </Container>
      </section>
    </>
  )
}

export default Contact
