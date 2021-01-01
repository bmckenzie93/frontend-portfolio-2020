import React from 'react'
import styles from './Section.module.css'
import Underline from '../../UI/Underline/Underline'

const Section = props => {
  return (
    <section className={styles.Section}>
      <h2>{props.title.toUpperCase()}</h2>
      <Underline />
    </section>
  )
}

export default Section
