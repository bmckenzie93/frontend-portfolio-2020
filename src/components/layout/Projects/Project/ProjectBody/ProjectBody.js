import React from 'react'
import FlexWrap from '../../../../UI/Flex/FlexWrap'
import Link from '../../../../UI/Button/Link'
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
            <Link video=''>Video</Link>
            <Link href={props.website}>Website</Link>
            <Link href={props.github}>GitHub</Link>
          </FlexWrap>
        </div>
    </div>
  )
}

export default ProjectBody
