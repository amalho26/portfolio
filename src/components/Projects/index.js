import React from 'react';
import { projects } from '../../constants/projects';
import { AiOutlineArrowRight } from "react-icons/ai";
import {Section, SectionTitle, CardInfo, HeaderThree, Rect, ImgWrap, Img, ModalImg, ModalImgWrap, TitleContent, BlogCard, TagList, Hr, Tag, UtilityList, Quit} from './ProjectsElements';
import { AiFillGithub } from 'react-icons/ai';
import useState from 'react-usestateref';
import Modal from 'react-modal';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Work (props) {

  let style;

  const setHidden = () => {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: '80px',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#000",
    },
    
    content: {
      borderRadius: "30px",
      borderColor: "#000",
      boxShadow: "5px 5px 20px rgba(80, 78, 78, 0.5)",
      backgroundColor: "#000",
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  const [modalIsOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(0)
  const [showArrow, setShowArrow] = useState(true)

  function openModal(e) {
    
    setProject(e.currentTarget.value)
    setIsOpen(true);
    setHidden()
    setShowArrow(false)
  }

  function closeModal() {
    setIsOpen(false);
    setShowArrow(true)
    setHidden()
  }

  const responsive = {
    superDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
      slidesToSlide: 5 
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  
    return (
      
      <Section nopadding id="projects">
         
        <SectionTitle >Projects</SectionTitle>
        <Rect>
        <Carousel
          
          draggable={false}
          showDots={true}
          responsive={responsive}
          arrows={showArrow}
          ssr={true} 
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 0.8s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
           {projects.map((p, i) => {
            return (
              <ImgWrap value={i} onClick={openModal}>
                <Img src={p.imageModal}/>
             </ImgWrap>   
            );
          })} 
          
        </Carousel>
        </Rect>
        
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
          
          <Quit onClick={closeModal}>
          <h3>X</h3>
          </Quit>
        <BlogCard>
              <ModalImgWrap>
                <ModalImg src={projects[project].image} />
              </ModalImgWrap>  
              <TitleContent>
                <HeaderThree title>{projects[project].title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo description>
                <AiOutlineArrowRight size="20px" color="#58cced"/>
                {projects[project].bulletOne}
              </CardInfo>
              <CardInfo description><br></br>
                <AiOutlineArrowRight size="20px" color="#58cced"/>
                {projects[project].bulletTwo} 
              </CardInfo>
              {projects[project].bulletThree ?
              <CardInfo description><br></br>
                <AiOutlineArrowRight size="20px" color="#58cced"/>
                {projects[project].bulletThree}
              </CardInfo>
              : 
              null}
              <div>
                 <TagList>
                  {projects[project].tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList> 
              </div>
              {projects[project].visit? 
                <UtilityList href={projects[project].visit}>
                    <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                      <AiFillGithub size="3rem" />
                    </a>
                </UtilityList>
                
              : null }
              <br/>
            </BlogCard>
          
      </Modal>
      
      </Section>
    
  );
}

