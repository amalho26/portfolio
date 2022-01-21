import styled from 'styled-components';

export const ImgWrap = styled.button`
  margin: 50px 0 25px;
  display: inline-block;
  position: relative;
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const Img = styled.img`
  width: auto;
  height: 100%;
`;

export const ModalImgWrap = styled.div`
width: 100%;
padding: 20px;
text-align: center;

`;

export const ModalImg = styled.img`
width: 50%;
height: auto; 

@media screen and (max-width: 700px) {
  width: 100%;
}

`;

export const Quit = styled.div`
  height: 25px;
  width: 25px;
  background-color: #58cced;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  text-align: center;
`

export const Rect = styled.div`
  flex: 1;
  padding: 1em;
  text-align: center;
  border-radius: 20px;
  border: 2px solid #58cced;
  max-width: 100%;
  height: auto; 
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: 3rem;
  @media screen and (max-width: 1800px) {
    font-size: 2.5rem;
    font-weight: 300;
  }
  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-size: 1.2rem;
  line-height: 24px;
  text-align: left;
  @media screen and (max-width: 1800px) {
    font-size: 1rem;
  
  }
  @media screen and (max-width: 640px) {
    padding:.3rem
  
  }
`;

export const Section = styled.section`
  display: flex;
  background: #000000;
  flex-direction: column;
  padding: 32px 48px 0;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    padding: 16px 16px 0;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  text-align: left;
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  
  max-width: 100%;
  color: #ffffff;
  margin-bottom: 16px;
  padding: 58px 0 16px;

  @media screen and (max-width: 768px){
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 12px;
    padding: 40px 0 12px;
  }

  @media screen and (max-width: 640px){
    font-size: 32px;
    line-height: 40px;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 8px;
    padding: 16px 0 8px;
    max-width: 100%;
  }
`;

export const BlogCard = styled.div`
    
    text-align: center;
    width: 100%;

    @media screen and (min-width: 1801px) {
      margin-top: 200px;
      height: 60em;
      width: 80em;

    }

    @media screen and (max-width: 1800px) {
      height: 30em;
      width: 60em;

    }

    @media screen and (max-width: 1000px) {
      height: 30em;
      width: 40em;

    }

    @media screen and (max-width: 700px) {
      height: 30em;
      width: 30em;

    }

    @media screen and (max-width: 500px) {
      height: 25em;
      width: 15em;

    }
    
  `;

  export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d0bb57;
  `;

  export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;

  `

  export const UtilityList = styled.a`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0;
  `;
  
  
 
  export const Tag = styled.li`
  color: #9cc9e3;
  font-size: 1.2rem;
  list-style-type: none;
  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
  `
