import React from 'react'
import styles from './VideoPlayer.module.css'

const iconStyle = () => {
  return `
    fas fa-2x fa-times ${styles.CloseVideo}
  `
}

const VideoPlayer = props => {
  return (
    <div 
      className={styles.VideoPlayer} 
      style={props.style} >
      <div style={{position: 'relative'}}>
        <video 
          className={styles.Video}
          src={props.src}
          controls 
          ></video>

        <i 
          className={iconStyle()}
          onClick={props.closeClick}></i>
      </div>
    </div>
  )
}

export default VideoPlayer
