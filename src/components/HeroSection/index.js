import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Video from '../../videos/background.mp4';
import {Section, HeroBg, HeroContent, SectionText, VideoBg} from './HeroElements';

const HeroSection = () => {

    return (
        <Section id ='/'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <SectionText>Hi!<br/>My name is Aikam</SectionText>
                <ReactTypingEffect
                    text={["Software Engineering Student", "Application Developer", "Entrepreneur"]}
                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                    style= {{color: "white"}}
                    speed="75"
                    eraseDelay="1000"
                />
            </HeroContent>
        </Section>
    )
}

export default HeroSection
