import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png';
import linkedinLogo from '../assets/nav-icon1.svg';
import githubLogo from '../assets/nav-icon2.svg';
import EmailLogo from '../assets/nav-icon3.svg';

import { UilLinkedin } from '@iconscout/react-unicons'

import {useEffect, useState} from "react";


function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScroll] = useState('false');

    // change the color of the background based on if you scrolled or not 
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        }


        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href='#'><img src={''} alt = ""/></a>
                    <a href='#'><img src={''} alt = ""/></a>
                    <a href='#'><img src={''} alt = ""/></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}> <span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar