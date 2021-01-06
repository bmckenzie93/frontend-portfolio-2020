import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.NavbarUl}>

        <li className={styles.NavbarLi}>
          <a
            className={styles.NavbarA} 
            href="#hero">
              HOME
          </a>
        </li>

        <li className={styles.NavbarLi}>
          <a
            className={styles.NavbarA} 
            href="#about">
              ABOUT
          </a>
        </li>

        <li className={styles.NavbarLi}>
          <a 
            className={styles.NavbarA}
            href="#projects">
              PROJECTS
          </a>
        </li>

        <li className={styles.NavbarLi}>
          <a
            className={styles.NavbarA} 
            href="#contact">
              CONTACT
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
