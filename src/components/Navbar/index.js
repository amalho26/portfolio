import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { SiAcademia } from "react-icons/si";
import {animateScroll as scroll} from 'react-scroll';
import{Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, Resume} from './NavbarElements';
import pdf from '../../documents/resume.pdf'

const Navbar = ({toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);

        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLinks to='/' onClick={toggleHome}>
                    <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                        <SiAcademia size="2rem" />
                    </a>
                </NavLinks>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                            smooth={true}
                            duration={500}
                            exact='true'
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                       <NavLinks to='work'
                            smooth={true}
                            duration={500}
                            exact='true'
                        >
                            Work
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                            smooth={true}
                            duration={500}
                            exact='true'
                        >
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='footer'
                            smooth={true}
                            duration={500}
                            exact='true'
                        >
                            Contact
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <a href={pdf} without rel="noopener noreferrer" style={{textDecoration: 'none'}} target="_blank">
                            <Resume>
                                Resume
                            </Resume>
                        </a>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
