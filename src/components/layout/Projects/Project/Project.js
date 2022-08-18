import React from 'react'
import styles from './Project.module.css'
import ProjectBody from './ProjectBody/ProjectBody'
import ProjectHeader from './ProjectHeader/ProjectHeader'

const Project = props => {
  const className = () => {
    return `
    ${props.className} ${styles.Flex}
    `
  }

  return (
    <div className={ className() }>
      <div className={styles.Project}>
        <ProjectHeader title={props.title} />

        <ProjectBody 
          image={props.image}
          technologies={props.technologies}
          description={props.description}
          website={props.website}
          github={props.github}
          className={props.className} />
      </div>
    </div>
  )
}

export default Project