import React from 'react'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import TextArea from '../../UI/Form/Input/TextArea'
import Heading from '../../UI/Heading/Heading'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Heading 
        title="contact"
        style={{color:'#fff'}} />

      <p style={{textAlign: 'center', marginBottom: '2rem'}}>Have a question or want to work together?</p>

      <Form>
        <Input type="text" />
        <Input type="email" />
        <TextArea></TextArea>
      </Form>
    </div>
  )
}

export default Contact
