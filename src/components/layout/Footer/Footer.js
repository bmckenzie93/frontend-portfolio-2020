import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  // Get current year
  const year = new Date().getUTCFullYear();

  return (
    <footer className={styles.Footer}>
      <p>BRANDON MCKENZIE<span style={{color: '#e31b6d'}}>&copy;{year}</span></p>
    </footer>
  )
}

export default Footer
