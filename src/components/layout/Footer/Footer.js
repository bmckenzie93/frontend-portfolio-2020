import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  // Get current year
  const year = new Date().getUTCFullYear();

  return (
    <footer className={styles.Footer}>
      <div className={styles.ScrollUp}>
        <i class="fas fa-angle-double-up fa-2x" style={{
          paddingTop: '10px',
          color: '#fff'
        }}></i>
      </div>
      <p>BRANDON MCKENZIE<span style={{color: '#e31b6d'}}>&copy;{year}</span></p>
    </footer>
  )
}

export default Footer
