import React from 'react'
import Heading from '../../UI/Heading/Heading'
import Project from './Project/Project'
import styles from './Projects.module.css'

import immersed_in_art from '../../../assets/immersed_in_art.png'
import wild_water_world from '../../../assets/wild_water_world.png'
import poke_stats from '../../../assets/poke_stats.png'
import street_smart_developer from '../../../assets/street_smart_developer.png'
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
          image={immersed_in_art} />

        <Project 
          title='Wild Water World'
          image={wild_water_world} />

        <Project 
          title="Poke' Stats"
          image={poke_stats} />
          
        <Project 
          title='Street Smart Developer'
          image={street_smart_developer} />
      </Container>
    </section>
  )
}

export default Projects
