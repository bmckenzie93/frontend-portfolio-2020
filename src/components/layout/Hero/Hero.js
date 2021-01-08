import React from 'react'
import styles from './Hero.module.css'
import A from '../../UI/Button/Link'
import Background from '../../../assets/digitalBG.mp4'
import Container from '../../UI/Container/Container'
import { Link } from 'react-scroll'


const Hero = () => {
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

        <div className={styles.LinkDiv}>
          <Link
            className={styles.Button}
            to='about'
            smooth={true}
            duration={1000}
            offset={-47}
            target={''} >
              View my work &nbsp; <i className="fas fa-arrow-right" style={{transition: 'all .5s ease'}}></i>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Hero;