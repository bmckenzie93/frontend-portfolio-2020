import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.NavbarUl}>

        <li className={styles.NavbarLi}>
          <Link
            className={styles.NavbarA} 
            to="hero"
            smooth={true}
            duration={1000} >
              HOME
          </Link>
        </li>

        <li className={styles.NavbarLi}>
          <Link
            className={styles.NavbarA} 
            to="about"
            smooth={true}
            duration={1000}
            offset={-47.59} >
              ABOUT
          </Link>
        </li>

        <li className={styles.NavbarLi}>
          <Link 
            className={styles.NavbarA}
            to="projects"
            smooth={true}
            duration={1000}
            offset={-47.59} >
              PROJECTS
          </Link>
        </li>

        <li className={styles.NavbarLi}>
          <Link
            className={styles.NavbarA} 
            to="contact"
            smooth={true}
            duration={1000}
            offset={-47.59} >
              CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
