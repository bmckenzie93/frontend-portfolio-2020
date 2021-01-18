import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Container from '../../UI/Container/Container'
import { Link } from 'react-scroll'

const Navbar = () => {
  // Hamburger icon state
  const [isHamburger, setIsHamburger] = useState(true)

  // Toggle hamburger/close icon
  const handleToggle = () => {
    setIsHamburger(!isHamburger)
  }
  
  // Close Mobile
  // const closeMobileNav = () => {
  //   setIsHamburger(!isHamburger)

  // }



  // ACTIVE NAV LINKS ON SCROLL
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

  // THROTTLE FUNCTION FOR SCROLL EVENT
  const throttle = (fn, wait) => {
    var time = Date.now();
    return () => {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  
  window.addEventListener('scroll', throttle(findActive, 10))

  // HAMBURGER CLASS NAME FUNCTION
  // const hamburgerStyle = () => {
  //   return `
  //     fas fa-2x fa-bars ${styles.Hamburger}
  //   `
  // }

  const hamburger = document.getElementById('hamburger')
  
  const show = () => {
    const navUl = document.getElementById('navUl')

    navUl.classList.toggle('show')
    
  }
  
  return (
    <nav className={styles.Navbar}>
      <Container size="Large">
        <div onClick={ handleToggle } className={styles.Hamburger}>
          <i className={isHamburger ? 'fas fa-2x fa-bars' : 'fas fa-2x fa-times'} id="hamburger" onClick={setIsHamburger}></i>
        </div>
        <ul className={styles.NavbarUl} id="navUl">

          <li className={isHamburger ? styles.NavbarLi : `${styles.NavbarLi} show`}>
            <Link
              className={styles.NavbarA}
              to="home"
              smooth={true}
              duration={1000} 
              onClick={setIsHamburger} >
                HOME
            </Link>
          </li>

          <li className={isHamburger ? styles.NavbarLi : `${styles.NavbarLi} show`}>
            <Link
              className={styles.NavbarA}
              to="about"
              smooth={true}
              duration={1000}
              offset={-47}
              onClick={setIsHamburger} >
                ABOUT
            </Link>
          </li>

          <li className={isHamburger ? styles.NavbarLi : `${styles.NavbarLi} show`}>
            <Link 
              className={styles.NavbarA}
              to="projects"
              smooth={true}
              duration={1000}
              offset={-47.59}
              onClick={setIsHamburger} >
                PROJECTS
            </Link>
          </li>

          <li className={isHamburger ? styles.NavbarLi : `${styles.NavbarLi} show`}>
            <Link
              className={styles.NavbarA}
              to="contact"
              smooth={true}
              duration={1000}
              onClick={setIsHamburger} >
                CONTACT
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
