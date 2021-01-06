import React from 'react'
import styles from './Hero.module.css'
import Link from '../../UI/Button/Link'
import Background from '../../../assets/digitalBG.mp4'
import Container from '../../UI/Container/Container'


const Hero = () => {
  const arrowStyle = { transition: '.5s' }

  const hoverHandler = () => {
    const arrow = document.getElementById('arrow')
    arrow.style.transform = 'rotate(90deg)';
  }
  
  const unHoverHandler = () => {
    const arrow = document.getElementById('arrow')
    arrow.style.transform = 'rotate(0deg)';
  }

  return (
    <header 
      className={styles.Hero}
      id="hero" >

      <video autoPlay loop muted className={styles.Video}>
        <source src={Background} type="video/mp4"/>
      </video>
      
      <Container size="Large">
        <p>Hello, I'm <b style={{color: '#e31b6d'}}>Brandon McKenzie</b>.</p>
        <p>I'm a front-end web developer.</p>
        <Link
          onHover={hoverHandler}
          offHover={unHoverHandler}
          href={'#about'}
          target={''} >
            View my work &nbsp; <i className="fas fa-arrow-right" id="arrow" style={arrowStyle}></i>
        </Link>
      </Container>
    </header>
  )
}

export default Hero;