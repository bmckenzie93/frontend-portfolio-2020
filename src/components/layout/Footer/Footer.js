import React from 'react'
import Container from '../../UI/Container/Container'
import styles from './Footer.module.css'
import Resume from '../../../assets/BMcKenzie_Resume.pdf'

import { animateScroll as Scroll } from 'react-scroll'

const Footer = () => {
  // Get current year
  const year = new Date().getUTCFullYear();

  const iconClasses = (icon) => {
    return(`
      fab fa-2x fa-${icon} ${styles.FooterIcon}
    `)
  }


  return (
    <footer className={styles.Footer}>
      <Container size="Small">
        {/* Scroll to top */}
        <div 
          className={styles.ScrollUp}
          onClick={()=>Scroll.scrollToTop()} >
          <i className="fas fa-angle-double-up fa-2x" style={{
            paddingTop: '14px',
            color: '#fff'
          }}></i>
        </div>

        {/* Footer Icons */}
        <div className={styles.FooterIcons}>
          <div>
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/bmckenzie93/" 
              target="_blank" 
              className={styles.FooterLink}
              rel='noreferrer' >
                <i className={iconClasses('linkedin-in')}></i>
            </a>
            {/* GitHub */}
            <a 
              href="https://www.github.com/bmckenzie93" 
              target="_blank" 
              className={styles.FooterLink}
              rel='noreferrer' >
                <i className={iconClasses('github')}></i>
            </a>
          </div>

          {/* Download Resume */}
          <div className={styles.ResumeIcon}>
            <a 
              href={Resume} 
              download 
              style={{color: '#fff'}} >
                
              <i style={{padding: '.5rem'}} className="fas fa-3x fa-file-download"></i>
              <span style={{display: 'flex'}}>Download Resume</span>
            </a>
          </div>
        </div>

        <p>BRANDON MCKENZIE<span style={{color: '#e31b6d'}}>&copy;{year}</span></p>
      </Container>
    </footer>
  )
}

export default Footer