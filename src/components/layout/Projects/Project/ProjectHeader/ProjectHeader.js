import React from 'react'
import styles from './ProjectHeader.module.css'

const ProjectHeader = props => {
  return (
    <header className={styles.ProjectHeader}>
      {props.title}
    </header>
  )
}

export default ProjectHeader
