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
          title='Wild Water World'
          image={wild_water_world} />

        <Project 
          title='Immersed in Art'
          image={immersed_in_art} />

      </Container>
    </section>
  )
}

export default Projects
