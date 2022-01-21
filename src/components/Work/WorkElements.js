import styled from 'styled-components';

export const Heading = styled.h1`
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    line-height: 2;
    color: #fff;

`;

export const ImgWrap = styled.div`
  margin: 25px;
  display: inline-block;
  position: relative;
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 50%;

  @media screen and (max-width: 500px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const Img = styled.img`
  width: auto;
  height: 100%;
`;


export const GridContainer = styled.section`
display: flex;
flex-direction: row;
padding: 1rem;
place-items: center;
column-gap: 2rem;
row-gap: 2rem;
@media screen and (max-width: 1200px) {
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;

export const Rect = styled.div`
  flex: 1;
  padding: 1em;
  text-align: center;
  border-radius: 20px;
  border: 2px solid #58cced;
  max-width: 100%;
  height: 1000px; 

  @media screen and (max-width: 1500px) {
    height: 1200px; 
  }

  @media screen and (max-width: 1200px) {
    height: 100%;
  }
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

  @media screen and (max-width: 500px) {
    font-weight: 300;
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