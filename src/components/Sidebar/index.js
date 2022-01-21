import React from 'react'
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, Resume} from './SidebarElements'; 
import pdf from '../../documents/Resume.pdf'

export default function Sidebar ({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='work' onClick={toggle}>Work</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='footer' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <a href={pdf} without rel="noopener noreferrer" style={{textDecoration: 'none'}} target="_blank">
                        <Resume>
                            Resume
                        </Resume>
                    </a>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}