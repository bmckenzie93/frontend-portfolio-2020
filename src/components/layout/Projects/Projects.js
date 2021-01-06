import React from 'react'
import Heading from '../../UI/Heading/Heading'
import Project from './Project/Project'
import styles from './Projects.module.css'

import immersed_in_art from '../../../assets/immersed_in_art.png'
import wild_water_world from '../../../assets/wild_water_world.png'
import Container from '../../UI/Container/Container'



const Projects = () => {
  return (
    <section className={styles.Projects}>
      <Container size="Large">
        <Heading 
          title="projects"
          color="#000" />

        <Project 
          title='Immersed in Art'
          image={immersed_in_art}
          technologies='Sass / Flexbox / PHP'
          description='
            Landing page for artists to sign up and share their story on the 
            " Immersed in Art Podcast " hosted by " Off The Wall Graffiti " 
            non-profit organization.'
          video=""
          website="https://flamboyant-noether-04fe12.netlify.app"
          github="https://github.com/bmckenzie93/immersedInArt" />

        <Project 
          title='Wild Water World'
          image={wild_water_world}
          technologies='Sass / Fetch API / Flexbox / Grid'
          description='
            Water park example website displaying fun images, 
            allowing people to sign up for team water games, 
            and displaying a dynamic drink menu for the nightclub wet bar.'
          video=""
          website="https://xenodochial-nobel-c567c4.netlify.app"
          github="https://github.com/bmckenzie93/wild-water-world" />

      </Container>
    </section>
  )
}

export default Projects
