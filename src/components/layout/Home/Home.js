import React, { useRef, useEffect } from 'react'
import styles from './Home.module.css'
import Background from '../../../assets/digitalBG.mp4'
import Container from '../../UI/Container/Container'

import { Link } from 'react-scroll'
import gsap from 'gsap'


const Home = () => {
  let p1 = useRef(null);
  let p2 = useRef(null);
  let cta = useRef(null);

  useEffect(() => {
    // P1
    gsap.from(
      p1,
      2,
      {
        opacity: 0,
        x: -60,
        ease: 'ease-out'
      }
    )

    // P2
    gsap.from(
      p2,
      2,
      {
        opacity: 0,
        x: 60,
        ease: 'ease-out',
        delay: .3
      }
    )

    // CTA
    gsap.from(
      cta,
      2,
      {
        opacity: 0,
        y: 60,
        ease: 'ease-out',
        delay: .5
      }
    )
  }, [])

  return (
    <section 
      className={styles.Hero}
      id="home" >

      <video autoPlay loop muted className={styles.Video}>
        <source src={Background} type="video/mp4"/>
      </video>

      <Container size="Large">
        <p ref={el => { p1 = el }}>
          Hello, I'm <b style={{color: '#e31b6d'}}>Brandon McKenzie</b>.
        </p>
        <p ref={el => { p2 = el }}>
          I'm a front-end web developer.
        </p>

        <div 
          className={styles.LinkDiv}
          ref={el => { cta = el }} >
          <Link
            className={styles.Button}
            to='about'
            smooth={true}
            duration={1000}
            offset={-46}
            target={''} >
              View my work &nbsp; <i className="fas fa-arrow-right" style={{transition: 'all .5s ease'}}></i>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Home;