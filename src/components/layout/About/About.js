import React from 'react'
import styles from './About.module.css'
import Card from '../../UI/Card/Card'
import Flex from '../../UI/Flex/Flex'
import FlexWrap from '../../UI/Flex/FlexWrap'
import Heading from '../../UI/Heading/Heading'
import Container from '../../UI/Container/Container'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section 
      className={styles.About}
      id='about' >
        
      <Container size="Large">
        <Heading 
          title ='about'
          color='#000' />

        <h1 style={{ fontWeight: 'lighter', marginBottom: '3rem' }}>
          I love to design and code responsive websites and web applications.
          <br/>
          <Link 
            to="contact"
            smooth={true}
            duration={1000}
            offset={-47.59}
            style={{cursor: 'pointer'}} >
            Let's make something special.
          </Link>
        </h1>

        <Flex>
          <Card>
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
        <i style={{padding: '2rem'}} style={{padding: '2rem'}} class="fab fa-4x fa-react"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-css3-alt"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-js-square"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-html5"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-sass"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-bootstrap"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-wordpress"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-github-square"></i>
        <i style={{padding: '2rem'}} class="fab fa-4x fa-npm"></i>
        </FlexWrap>
      </Container>

    </section>
  )
}

export default About
