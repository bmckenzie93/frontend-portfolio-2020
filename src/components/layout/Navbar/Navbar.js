import React from 'react'
import styles from './Navbar.module.css'
import Container from '../../UI/Container/Container'
import { Link } from 'react-scroll'

const Navbar = () => {
  const findActive = (e) => {
    let navLinks = document.querySelectorAll('nav ul li a')
    let fromTop = window.scrollY

    navLinks.forEach(link => {
      let section = document.querySelector(`section#${link.innerHTML.toLocaleLowerCase()}`)

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

  const throttle = (fn, wait) => {
    var time = Date.now();
    return () => {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  
  window.addEventListener('scroll', throttle(findActive, 300))
  
  return (
    <nav className={styles.Navbar}>
      <Container size="Large">
        <ul className={styles.NavbarUl}>

          <li className={styles.NavbarLi}>
            <Link
              className={styles.NavbarA}
              to="home"
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
