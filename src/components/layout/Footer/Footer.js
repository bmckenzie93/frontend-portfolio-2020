import React from 'react'
import Container from '../../UI/Container/Container'
import styles from './Footer.module.css'
import Resume from '../../../assets/BMcKenzie_Resume.pdf'


import { animateScroll as Scroll } from 'react-scroll'

const Footer = () => {
  // Get current year
  const year = new Date().getUTCFullYear();

  return (
    <footer className={styles.Footer}>
        <Container size="Large">
        {/* Scroll to top */}
        <div 
          className={styles.ScrollUp}
          onClick={()=>Scroll.scrollToTop()} >
          <i className="fas fa-angle-double-up fa-2x" style={{
            paddingTop: '10px',
            color: '#fff'
          }}></i>
        </div>

        {/* Footer Icons */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            {/* LinkedIn */}
            <a href="https://www.lhttps//www.linkedin.com/in/bmckenzie93/" target="_blank">
              <i style={{padding: '1rem', backgroundColor: '#262f38'}} className="fab fa-2x fa-linkedin-in"></i>
            </a>
            {/* GitHub */}
            <a href="https://github.com/bmckenzie93" target="_blank">
              <i style={{padding: '1rem', backgroundColor: '#262f38', marginLeft: '1rem'}} className="fab fa-2x fa-github"></i>
            </a>
          </div>

          {/* Download Resume */}
          <a href={Resume} download>
            <i style={{padding: '.5rem'}} className="fas fa-3x fa-file-download"></i>
            <span style={{display: 'flex'}}>Download Resume</span>
          </a>
        </div>

        <p>BRANDON MCKENZIE<span style={{color: '#e31b6d'}}>&copy;{year}</span></p>
      </Container>
    </footer>
  )
}

export default Footer
