import React, { useState, useEffect } from 'react'
import Container from '../../UI/Container/Container'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Submit from '../../UI/Form/Input/Submit'
import TextArea from '../../UI/Form/Input/TextArea'
import Heading from '../../UI/Heading/Heading'
import Wedge from '../../UI/Wedge/Wedge'
import styles from './Contact.module.css'

import * as emailjs from 'emailjs-com'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
    } else if(!re.test(email)) {
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

  // SCROLL ANIMATIONS
  useEffect(() => {
    // Heading
    gsap.from('#contactHeading', {
      scrollTrigger: {
        trigger: '#contactHeading',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        opacity: 0,
        y: -60,
        ease: 'ease-in'
    },
    )

    // Description
    gsap.from('.description', {
      scrollTrigger: {
        trigger: '.description',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        opacity: 0,
        y: 60,
        ease: 'ease-in'
    },
    )

    // Form Inputs
    gsap.from('.input', {
      scrollTrigger: {
        trigger: '.input',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        delay: .3,
        stagger: .2,
        opacity: 0,
        y: 40,
        ease: 'ease'
    },
    )
  }, [])

  return (
    <>
      <section 
        className={styles.Contact}
        id='contact' >
        <Wedge />
        <Heading 
          title="contact"
          color='#fff'
          id="contactHeading" />

        <p
          style={{
            textAlign: 'center', 
            marginBottom: '3rem',
            color: '#04c2c9',
            padding: '0 1rem'
          }}
          className="description" >
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
                {border: '1px solid red'} : null}
              className="input" />

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
                {border: '1px solid red'} : null}
              className="input" />

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
                {border: '1px solid red'} : null}
              className="input" >
            </TextArea>

            {messageState.error ?
              <div className={styles.ErrorMessage}>
                Please enter your message
              </div> : null}

            {successState ? 
              <div className={styles.SuccessMessage}>Your message has been sent!</div> : null}
              {!successState ?
            <Submit className="input"/> : null}

          </Form>
        </Container>
      </section>
    </>
  )
}

export default Contact