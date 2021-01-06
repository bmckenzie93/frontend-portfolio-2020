import React from 'react'
import styles from './Project.module.css'
import ProjectBody from './ProjectBody/ProjectBody'
import ProjectHeader from './ProjectHeader/ProjectHeader'

const Project = props => {
  return (
    <div className={styles.Flex}>
      <div className={styles.Project}>
        <ProjectHeader title={props.title} />

        <ProjectBody 
          image={props.image}
          technologies={props.technologies}
          description={props.description} />

      </div>
    </div>
  )
}

export default Project