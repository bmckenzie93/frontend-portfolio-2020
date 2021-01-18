import React from 'react'
import styles from '../../Button/Button.module.css'

const Submit = props => {

  const className = () => {
    return`
    ${props.className} ${styles.Button}
    `
  }

  return (
    <input 
      className={ className() }
      type="submit" 
      value="submit"
      onClick={props.onClick}
      disabled={props.disabled} />
  )
}

export default Submit
