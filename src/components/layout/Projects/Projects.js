import React from 'react'
import Grid from '../../UI/Grid/Grid'
import Heading from '../../UI/Heading/Heading'
import Project from './Project/Project'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.Projects}>
      <Heading title="projects" />

      <Grid>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Grid>



    </section>
  )
}

export default Projects
