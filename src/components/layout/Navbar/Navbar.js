import React from 'react'
import styles from './Navbar.module.css'
import Container from '../../UI/Container/Container'
import { Link } from 'react-scroll'

const Navbar = () => {
  const findActive = (e) => {
    let navLinks = document.querySelectorAll('nav ul li a');

    let fromTop = window.scrollY

    navLinks.forEach(link => {
      console.log(link)
      let section = document.querySelector(`section#${link.innerHTML.toLocaleLowerCase()}`)
      console.log(section)

      if(
        section.offsetTop <= fromTop + 47.9 &&
        section.offsetTop + section.offsetHeight > fromTop + 47.9
      ) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
  
  window.addEventListener('scroll', findActive)
  
  return (
    <nav className={styles.Navbar}>
      <Container size="Large">
        <ul className={styles.NavbarUl}>

          <li className={styles.NavbarLi}>
            <Link
              className={styles.NavbarA}
              to="hero"
              smooth={true}
              duration={1000} >
                HERO
            </Link>
          </li>

          <li className={styles.NavbarLi}>
            <Link
              className={styles.NavbarA}
              to="about"
              smooth={true}
              duration={1000}
              offset={0} >
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
              duration={1000} >
                CONTACT
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
