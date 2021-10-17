import React from 'react';
import { work } from '../../constants/work';
import { AiOutlineArrowRight } from "react-icons/ai";
import {Section, SectionTitle, CardInfo, HeaderThree, Heading, Rect, ImgWrap, Img, GridContainer, TitleContent} from './WorkElements';

const Work = () => {
    return (
      <Section nopadding id="work">
        <SectionTitle main>Work Experience</SectionTitle>
          <GridContainer>
            {work.map((p, i) => {
              
              return (
                <Rect key={i}>
                  <ImgWrap>
                    <Img src={p.image} />
                  </ImgWrap>  
                  <TitleContent>
                    <HeaderThree title>{p.position}</HeaderThree>
                  </TitleContent>
                  <Heading>{p.company}</Heading>
                  <CardInfo description>
                    <AiOutlineArrowRight size="20px" color="#58cced"/>
                    {p.bulletOne}
                  </CardInfo>
                  <CardInfo description><br></br>
                    <AiOutlineArrowRight size="20px" color="#58cced"/>
                    {p.bulletTwo}
                  </CardInfo>
                  <CardInfo description><br></br>
                    <AiOutlineArrowRight size="20px" color="#58cced"/>
                    {p.bulletThree}
                  </CardInfo>
                </Rect>
              );
            })}
          </GridContainer>
      </Section>
  );
}

export default Work

