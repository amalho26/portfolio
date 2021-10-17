import { SectionText, Line, Section, SocialMediaContainer, Container, Row, MediaRow, Heading1,Heading2} from './FooterElements';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
    return (
        <Section id ='footer'>
            <Line />
            <Container>
                <Row>
                    <Heading1>LET'S<br></br>CONNECT</Heading1>
                    <Heading2>Aikam Malhotra<br></br>
                        <font size={5}>London, Ontario</font>
                    </Heading2>
                </Row>
                <MediaRow> 
                    <SocialMediaContainer>
                        <a href="https://github.com/amalho26">
                            <AiFillGithub size="3.5rem" color= "#58cced" />
                        </a>
                        <a href="https://linkedin.com/in/aikammalhotra">
                            <AiFillLinkedin size="3.5rem" color= "#58cced" />
                        </a>
                        <a href="mailto:amalho26@uwo.ca" >
                            <AiOutlineMail size="3.5rem" color= "#58cced"/>
                        </a>
                    </SocialMediaContainer>
                </MediaRow>
       
            </Container>
      <SectionText>Designed & Built by Aikam Malhotra</SectionText>
    </Section>
        
    )
}   

export default Footer
