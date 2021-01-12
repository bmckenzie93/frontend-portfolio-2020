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

          <div className={styles.CTA}>
            <FlexWrap>
              <Link 
                video=''>
                  Video
              </Link>
              <Link 
                href={props.website}
                target='_blank'
                rel='noreferrer' >
                  Website
              </Link>
              <Link 
                href={props.github}
                target='_blank'
                rel='noreferrer' >
                  GitHub
              </Link>
            </FlexWrap>
          </div>
        </div>
    </div>
  )
}

export default ProjectBody
