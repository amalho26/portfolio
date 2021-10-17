import React from 'react';
import {BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImgWrap, Section, SectionTitle} from './ProjectsElements';
import {projects} from '../../constants/projects';
import {AiFillGithub, AiOutlineArrowRight} from "react-icons/ai";

const Projects = () => (

    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          
          return (
            
            <BlogCard key={i}>
              <ImgWrap>
                <Img src={p.image} />
              </ImgWrap>  
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
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
              <div>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              {p.visit? 
                <UtilityList href={p.visit}>
                    <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                      <AiFillGithub size="3rem" />
                    </a>
                </UtilityList>
              : null }
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
  
  export default Projects;