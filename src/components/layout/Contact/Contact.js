import React, { useState } from 'react'
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
  // Name State
  const [nameState, setNameState] = useState({
    value: '',
    error: false
  })

  const nameChangeHandler = (newValue) => {
    setNameState({
      value: newValue,
      error: false
    })
  }

  // Email State
  const [emailState, setEmailState] = useState({
    value: '',
    error: false
  })

  const emailChangeHandler = newValue => {
    setEmailState({
      value: newValue,
      error: false
    })
  }

  // Message State
  const [messageState, setMessageState] = useState({
    value: '',
    error: false
  })

  const messageChangeHandler = newValue => {
    setMessageState({
      value: newValue,
      error: false
    })
  }

  // Success State
  const[successState, setSuccessState] = useState(false)

  // Validate Form 
  const validateForm = (e) => {
    e.preventDefault()

    let name = nameState.value;
    let email = emailState.value;
    let message = messageState.value;


    if(name === '') {
      setNameState({
        value: name,
        error: true
      })
      return
    } else if(email === '') {
      setEmailState({
        value: email,
        error: true
      })
    } else if(message === '') {
      setMessageState({
        value: message,
        error: true
      })
    }

    if(nameState.value !== '' && emailState.value !== '' && messageState.value !== '') {
        sendEmail()
      }
  }

  // EMAIL JS (Send Email)
  function sendEmail() {
    emailjs.sendForm('gmail', 'portfolio_template', '#contactForm', 'user_k4ld27wqjmbJxvHYci9cB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setSuccessState(true)
    setNameState({value: ''})
    setEmailState({value: ''})
    setMessageState({value: ''})
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
            onSubmit={validateForm}
            id='contactForm'>

            <Input 
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={nameState.value}
              handleChange={e => nameChangeHandler(e.target.value)}
              style={nameState.error ?
                {border: '1px solid red'} : null} />

              {nameState.error ?
              <div className={styles.ErrorMessage}>
                Please enter your name
              </div> : null}

              <Input 
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={emailState.value}
                handleChange={e => emailChangeHandler(e.target.value)}
                style={emailState.error ?
                  {border: '1px solid red'} : null} />

              {emailState.error ?
              <div className={styles.ErrorMessage}>
                Please enter a valid email address
              </div> : null}

            <TextArea
              name="message"
              id="message"
              placeholder="Your Message"
              value={messageState.value}
              handleChange={e => messageChangeHandler(e.target.value)}
              style={messageState.error ?
                {border: '1px solid red'} : null} >
            </TextArea>

            {messageState.error ?
              <div className={styles.ErrorMessage}>
                Please enter your message
              </div> : null}
            
            {successState ? 
            <div className={styles.SuccessMessage}>Your message has been sent!</div> : null}
            {!successState ?
            <Submit /> : null}
            

          </Form>
        </Container>
      </section>
    </>
  )
}

export default Contact
