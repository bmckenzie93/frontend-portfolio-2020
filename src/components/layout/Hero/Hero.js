import React from 'react'
import styles from './Hero.module.css'


const Hero = () => {
  return (
    <header className={styles.Hero}>
      <p>Hello, I'm <span style={{color: '#e31b6d', fontWeight: 'bold'}}>Brandon McKenzie</span>.</p>
      <p>I'm a front-end web developer.</p>
      <button>View my work</button>
    </header>
  )
}

export default Hero;