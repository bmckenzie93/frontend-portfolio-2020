import React from 'react'
import Heading from '../../UI/Heading/Heading'
import Project from './Project/Project'
import styles from './Projects.module.css'



const Projects = () => {
  return (
    <section className={styles.Projects}>
      <Heading title="projects" />
      <Project title="as" />
      <Project />
      <Project />
      <Project />
    </section>
  )
}

export default Projects
