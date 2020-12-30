import React from 'react'
import styles from './Hero.module.css'
import Button from '../../UI/Button/Button'



const Hero = () => {
  const arrow = <i className="fas fa-arrow-right" id="btnArrow" style={{padding: '0 1rem'}}></i>
  let arrowStyle = arrow.props.style;
  
  const hoverHandler = () => {
    console.log(arrowStyle)
    arrowStyle = {...arrowStyle, transform: 'rotate(90deg)'}
    arrow.props.style = arrowStyle
  }
  const unHoverHandler = () => {
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