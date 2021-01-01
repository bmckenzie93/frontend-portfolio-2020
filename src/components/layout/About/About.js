import React from 'react'
import styles from './About.module.css'
import Card from '../../UI/Card/Card'
import Flex from '../../UI/Flex/Flex'
import Heading from '../../UI/Heading/Heading'

const About = () => {
  return (
    <section className={styles.About}>
      <Heading title ='About' />

      <Flex>
        <Card>
          <div className="card-icon">
            <div className="fas fa-mobile-alt fa-4x"></div>
          </div>

            <h3>Responsive Layouts</h3>
            <p>My designs will work on any device including desktops, tablets, and mobile phones.</p>
        </Card>

        <Card>
          <div className="card-icon">
            <div className="fas fa-code fa-4x"></div>
            <h3>Dynamic Functionality</h3>
            <p>I make pages come to life with slideshows, popups, animations and more.</p>
          </div>
        </Card>

        <Card>
          <div className="card-icon">
            <div className="fas fa-rocket fa-4x"></div>
            <h3>Deployment & Management</h3>
            <p>I can get your website onto the internet and connect you world wide!</p>
          </div>
        </Card>
      </Flex>

    </section>
  )
}

export default About
