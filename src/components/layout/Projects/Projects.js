import React, { useEffect } from 'react'
import Heading from '../../UI/Heading/Heading'
import Project from './Project/Project'
import styles from './Projects.module.css'

import whm from '../../../assets/whm_720x406.jpg'
import sttv from '../../../assets/sttv_720x406.jpg'

import wtq from '../../../assets/wtq_720x406.jpg'
import cwc from '../../../assets/cwc_720x406.jpg'
import genu from '../../../assets/genu_720x406.jpg'
import boeing from '../../../assets/boeing_720x406.jpg'
import wcpa from '../../../assets/wcpa_720x406.jpg'
import antarctica from '../../../assets/antarctica_720x406.jpg'
import immersed_in_art from '../../../assets/immersed-in-art_720x406.jpg'
import little_help_book from '../../../assets/little-help-book_720x406.jpg'

import Container from '../../UI/Container/Container'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Projects = () => {
  
  // GSAP
  useEffect(() => {
    // Heading
    gsap.from('#projectsHeading', {
      scrollTrigger: {
        trigger: '#projectsHeading',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        opacity: 0,
        y: -60,
        ease: 'ease-in'
      },
    )

    // Projects
    gsap.from('.project', {
      scrollTrigger: {
        trigger: '.project',
        toggleActions: 'play',
        start: 'top 80%',
      },
        duration: 1,
        delay: .3,
        stagger: .2,
        opacity: 0,
        x: -60,
        ease: 'ease-in'
      },
    )
  }, [])

  return (
    <section 
      className={styles.Projects}
      id="projects" >
      <Container size="Large">
        <Heading 
          title="projects"
          color="#000"
          id="projectsHeading" />

        <Project 
          title='Genu Bank'
          image={genu}
          // technologies=''
          description='
            Provides information for Genu Bank, 
            and collects email addresses.'
          website="https://genubank.com/"
          // github="https://github.com/bmckenzie93/"
          className="project" />

          <Project 
            title='Boeing Airplanes'
            image={boeing}
            // technologies='SASS / NETLIFY'
            description="Global Equity, Diversity & Inclusion 2023 Report page for Boeing Airplanes"
            website="https://www.boeing.com/principles/diversity-and-inclusion/annual-report/index.page"
            // github="https://github.com/bmckenzie93/"
            className="project" />

          <Project 
            title='See Through the Vape'
            image={sttv}
            // technologies=''
            description='
              See Through the Vape offers tools to help 
              quit vaping. Collects emails and
              provides information with fun animations
              and interactive elements.'
            website="https://seethroughthevape.org/"
            // github="https://github.com/bmckenzie93/"
            className="project" />

          <Project 
            title='Smoke Free Utah'
            image={wtq}
            // technologies=''
            description='
              Way to Quit offers tools to help 
              quit nicotine. Collects emails and
              provides information with fun animations
              and interactive elements.'
            website="https://waytoquit.org/"
            // github="https://github.com/bmckenzie93/"
            className="project" />
          

          <Project 
          title='Pacific Sound and Vision'
          image={antarctica}
          // technologies='SASS / NETLIFY'
          description='
            Collects and delivers signatures, which will publicly support the Convention 
            for the Conservation of Antarctic Marine Living Resources this year.'
          website="http://antarctica.pacificsv.org"
          github="https://github.com/bmckenzie93/antarctica-landing-page"
          className="project" />

          <Project 
          title='Colorado Wildlife Council'
          image={cwc}
          // technologies='SASS / NETLIFY'
          description='
            Collects emails & donations while providing information about programs, events, & meetings from the Colorado Wildlife Council'
          website="https://cowildlifecouncil.org/"
          // github="https://github.com/bmckenzie93/antarctica-landing-page"
          className="project" />



          {/* <Project 
          title='West Coast Painters Academy'
          image={wcpa}
          // technologies=''
          description='
            Allows students to view information about upcoming classes, 
            register for the classes, and pay for their courses.'
          website="http://wcpaintersacademy.com/"
          // github="https://github.com/bmckenzie93/"
          className="project" />

          <Project 
            title='Immersed in Art'
            image={immersed_in_art}
            // technologies=''
            description='
              Landing page for artists to sign up and share their story on the 
              "Immersed in Art Podcast" hosted by Off The Wall Graffiti 
              non-profit organization.'
            website="https://flamboyant-noether-04fe12.netlify.app"
            github="https://github.com/bmckenzie93/immersedInArt"
            className="project" /> */}
      </Container>
    </section>
  )
}

export default Projects