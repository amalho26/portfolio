import React from 'react';
import Image from '../../images/coding.jpg';
import {ImgWrap, Img, SectionTitle, Section, SectionText, Container} from './AboutElements';

const About = () => {
    return ( 
        <Section nopadding id="about">
            <SectionTitle main>
                About Me
            </SectionTitle>
            <Container>
                <SectionText> 
                    My name is Aikam and I'm a 3rd year
                    <font color= "#58cced"> Software Engineering </font>
                    student at the
                    <font color= "#58cced"> University of Western Ontario. </font>
                    <br/><br/>While I have yet to find my programming niche, my underlying interests lie in exploring and designing new software 
                    applications that could come handy in day to day tasks. <br/><br/>Some technologies I've worked with recently: 
                    <font color= "#58cced">
                        <br/>{'>'}   Ruby on Rails
                        <br/>{'>'}   Javascript
                        <br/>{'>'}   ReactJS
                        <br/>{'>'}   TypeScript
                        <br/>{'>'}   C++
                    </font>
                </SectionText>
                <ImgWrap>
                    <Img src={Image}/>
                </ImgWrap>
            </Container>
        </Section>
      
    )
}

export default About
