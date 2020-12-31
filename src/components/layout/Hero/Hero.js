import React from 'react'
import styles from './Hero.module.css'
import Button from '../../UI/Button/Button'
import Background from '../../../assets/digitalBG.mp4'



const Hero = () => {
  // somehow bind the styles being added and removed to the icon to rotate it
  //try with rarr  n

  const arrowStyle = { transition: '.5s' }

  const hoverHandler = () => {
    const arrow = document.getElementById('arrow')
    arrow.style.transform = 'rotate(90deg)';
  }
  
  const unHoverHandler = () => {
    const arrow = document.getElementById('arrow')
    arrow.style.transform = 'rotate(0deg)';
  }
  // put the rotate on the icon itself 
  // const arrow = 

  return (

    <header className={styles.Hero}>
      <video autoPlay loop muted className={styles.Video}>
        <source src={Background} type="video/mp4"/>
      </video>
      <p>Hello, I'm <b style={{color: '#e31b6d'}}>Brandon McKenzie</b>.</p>
      <p>I'm a front-end web developer.</p>
      <Button
        onHover={hoverHandler}
        offHover={unHoverHandler}>
          View my work &nbsp; <i className="fas fa-arrow-right" id="arrow" style={arrowStyle}></i>
      </Button>
    </header>
  )

  
}

export default Hero;