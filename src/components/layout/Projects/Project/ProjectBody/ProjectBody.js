import React from 'react'
import styles from './ProjectBody.module.css'

const ProjectBody = props => {
  return (
    <div className={styles.ProjectBody}>
      <img 
        className={styles.img} 
        src={props.image} 
        alt={props.image} />
    </div>
  )
}

export default ProjectBody
