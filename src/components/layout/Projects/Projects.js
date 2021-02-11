import React, { useEffect, useState } from 'react'
import Heading from '../../UI/Heading/Heading'
import Project from './Project/Project'
import styles from './Projects.module.css'

import immersed_in_art from '../../../assets/immersed_in_art.png'
import immersed_demo from '../../../assets/IIAcompressed.mp4'

import wild_water_world from '../../../assets/wild_water_world.png'
import wild_demo from '../../../assets/WWWcompressed.mp4'

import eugene_food_scene from '../../../assets/eugene_food_scene.png'
import eugene_demo from '../../../assets/EFScompressed.mp4'

import little_help_book from '../../../assets/little_help_book.png'
import little_demo from '../../../assets/LHBcompressed.mp4'

import Container from '../../UI/Container/Container'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoPlayer from '../../UI/VideoPlayer/VideoPlayer'
gsap.registerPlugin(ScrollTrigger)


const Projects = () => {
  // VIDEO STATE
  const [videoState, setVideoState] = useState({
    isHidden: true,
    src: null
  })

  // SHOW VIDEO
  const showVideo = src => {
    console.log('show video clicked')
    setVideoState({
      isHidden: false,
      src: src
    })
  }

  // CLOSE VIDEO PLAYER
  const handleClose = () => {
    setVideoState({
      isHidden: true,
      src: null
    })
  }

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
          title='Eugene Food Scene'
          image={eugene_food_scene}
          technologies='Blazorise / Flexbox / Grid'
          description='
            A COVID-19 recovery food locating app
            with aspirations to include food sources and networks beyond 
            restaurant delivery and take-out. 
            This is an Open Eugene project and part of the Code for America network.'
          video={() => showVideo(eugene_demo)}
          website="http://eugenefoodscene.com"
          github="https://github.com/bmckenzie93/eugene-food-scene/blob/develop/EugeneFoodScene/wwwroot/css/site.css"
          className="project" />

        <Project 
          title='Immersed in Art'
          image={immersed_in_art}
          technologies='Sass / Flexbox / PHP'
          description='
            Landing page for artists to sign up and share their story on the 
            " Immersed in Art Podcast " hosted by " Off The Wall Graffiti " 
            non-profit organization.'
          video={() => showVideo(immersed_demo)}
          website="https://flamboyant-noether-04fe12.netlify.app"
          github="https://github.com/bmckenzie93/immersedInArt"
          className="project" />

        <Project 
          title='Wild Water World'
          image={wild_water_world}
          technologies='Sass / AJAX / Flexbox / Grid'
          description='
            Water park example website displaying fun images, 
            allowing people to sign up for team water games, 
            and displaying a dynamic drink menu for the nightclub wet bar.'
          video={() => showVideo(wild_demo)}
          website="https://xenodochial-nobel-c567c4.netlify.app"
          github="https://github.com/bmckenzie93/wild-water-world"
          className="project" />

        <Project 
          title='Little Help Book'
          image={little_help_book}
          technologies='Sass / Flexbox'
          description='
            A COVID-19 recovery resource discovery app 
            working with local agencies to make it easier for at-risk populations 
            to find the resources they need.
            This is an Open Eugene project and part of the Code for America network.'
          video={() => showVideo(little_demo)}
          website="https://littlehelpbook.com/"
          github="https://github.com/OpenEugene/little-help-book-web"
          className="project" />

          <VideoPlayer
            style={videoState.isHidden ? {display: 'none'} : {display: 'flex'}}
            src={videoState.src}
            closeClick={handleClose} />

      </Container>
    </section>
  )
}

export default Projects