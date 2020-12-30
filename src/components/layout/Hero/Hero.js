import React from 'react'
import styles from './Hero.module.css'
import Button from '../../UI/Button/Button'



const Hero = () => {
  // somehow bind the styles being added and removed to the icon to rotate it
  
  let arrowStyle = {padding: '0 1rem'};

  const arrow = <i className="fas fa-arrow-right" style={arrowStyle}></i>
  
  const hoverHandler = () => {
    console.log(arrowStyle)
    arrowStyle = {...arrowStyle, transform: 'rotate(90deg)'}
    console.log(arrowStyle)
  }

  const unHoverHandler = () => {
    console.log(arrowStyle);
    arrowStyle = {padding: '0 1rem'};
    console.log(arrowStyle);
  }

  return (
    <header className={styles.Hero}>
      <p>Hello, I'm <b style={{color: '#e31b6d'}}>Brandon McKenzie</b>.</p>
      <p>I'm a front-end web developer.</p>
      <Button
        onHover={hoverHandler}
        offHover={unHoverHandler}>
          View my work &nbsp; {arrow}
      </Button>
    </header>
  )

  
}

export default Hero;