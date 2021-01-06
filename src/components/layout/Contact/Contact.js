import React from 'react'
import Button from '../../UI/Button/Button'
import Container from '../../UI/Container/Container'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Submit from '../../UI/Form/Input/Submit'
import TextArea from '../../UI/Form/Input/TextArea'
import Heading from '../../UI/Heading/Heading'
import Wedge from '../../UI/Wedge/Wedge'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.Contact}>
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
            action=''
            id='contactForm'>

            <Input 
              type="text"
              name="contactForm"
              id="name"
              placeholder="Name" />

            <Input 
              type="email"
              name="contactForm"
              id="email"
              placeholder="Enter Email" />

            <TextArea
              name="contactForm"
              id="message"
              placeholder="Your Message">
            </TextArea>

            <Submit />

          </Form>
        </Container>
      </div>
    </>
  )
}

export default Contact
