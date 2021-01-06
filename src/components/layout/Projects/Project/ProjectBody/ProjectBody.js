import React from 'react'
import FlexWrap from '../../../../UI/Flex/FlexWrap'
import Button from '../../../../UI/Button/Button'
import styles from './ProjectBody.module.css'

const ProjectBody = props => {
  return (
    <div className={styles.ProjectBody}>
      <img 
        className={styles.img} 
        src={props.image} 
        alt={props.image} />

        <div className={styles.Info}>
          <p className={styles.Technologies}>{props.technologies}</p>
          <p className={styles.Description}>{props.description}</p>
          <FlexWrap>
            <Button>Video</Button>
            <Button>Website</Button>
            <Button>GitHub</Button>
          </FlexWrap>
        </div>
    </div>
  )
}

export default ProjectBody
