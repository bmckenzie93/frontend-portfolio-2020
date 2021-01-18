import React, { useEffect } from 'react'
import styles from './About.module.css'
import Card from '../../UI/Card/Card'
import Flex from '../../UI/Flex/Flex'
import FlexWrap from '../../UI/Flex/FlexWrap'
import Heading from '../../UI/Heading/Heading'
import Container from '../../UI/Container/Container'

import { Link } from 'react-scroll'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  
  // SCROLL TRIGGER
  useEffect(() => {
    // Heading
    gsap.from('#heading', {
      scrollTrigger: {
        trigger: '#heading',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        opacity: 0,
        y: -60,
        ease: 'ease-in'
      },
    )

    // Description
    gsap.from('#description', {
      scrollTrigger: {
        trigger: '#description',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        opacity: 0,
        x: -60,
        ease: 'ease-in'
      },
    )

    // Cards
    gsap.from('.card', {
      scrollTrigger: {
        trigger: '.card',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        delay: .1,
        stagger: .2,
        opacity: 0,
        x: 60,
        ease: 'ease'
      },
    )

    // Technology Icons
    gsap.from('.tech', {
      scrollTrigger: {
        trigger: '.tech',
        toggleActions: 'play',
      },
        duration: 1,
        delay: .1,
        stagger: .1,
        opacity: 0,
        x: -60,
        ease: 'ease-in'
      },
    )
  }, [])

  const iconStyle = (icon) => {
    return `
      tech fab fa-4x fa-${icon} ${styles.Tech}
    `
  }

  return (
    <section 
      className={styles.About}
      id='about' >
        
      <Container size="Large">
        <Heading 
          title ='about'
          color='#000'
          id="heading" />

        <h1 style={{ fontWeight: 'lighter', marginBottom: '3rem' }} id="description">
          I love to design and code responsive websites and web applications.
          <br/>
          <Link 
            to="contact"
            smooth={true}
            duration={1000}
            offset={-47}
            style={{cursor: 'pointer'}} >
            Let's make something special.
          </Link>
        </h1>

        <Flex id="cards">
          <Card className="card">
            <div className="card-icon">
              <div className="fas fa-mobile-alt fa-4x"></div>
            </div>
            <div className="card-text">
              <h3 style={{marginBottom: '1rem', color: '#e31b6d' }}>Responsive Layouts</h3>
              <p>My designs will work on any device including desktops, tablets, and mobile phones.</p>
            </div>

          </Card>

          <Card>
            <div className="card-icon">
              <div className="fas fa-code fa-4x"></div>
            </div>
            <div className="card-text">
              <h3 style={{marginBottom: '1rem', color: '#e31b6d' }}>Dynamic Functionality</h3>
              <p>I make pages come to life with slideshows, popups, animations and more.</p>
            </div>
          </Card>

          <Card>
            <div className="card-icon">
              <div className="fas fa-rocket fa-4x"></div>
            </div>
            <div className="card-text">
              <h3 style={{marginBottom: '1rem', color: '#e31b6d' }}>Deployment & Management</h3>
              <p>Let's get your website onto the internet and in front of the entire world!</p>
            </div>
          </Card>
        </Flex>

        <FlexWrap>
          <i className={iconStyle("react")}></i>
          <i className={iconStyle("css3-alt")}></i>
          <i className={iconStyle("js-square")}></i>
          <i className={iconStyle("html5")}></i>
          <i className={iconStyle("sass")}></i>
          <i className={iconStyle("bootstrap")}></i>
          <i className={iconStyle("wordpress")}></i>
          <i className={iconStyle("github-square")}></i>
          <i className={iconStyle("npm")}></i>
        </FlexWrap>
      </Container>

    </section>
  )
}

export default About
