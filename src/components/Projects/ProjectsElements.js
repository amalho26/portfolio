import styled from 'styled-components';

export const ImgWrap = styled.div`
  width: 100%;
  padding: 20px;
  align-items: center;
  @media screen and (max-width: 1200px) {
    height: auto;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;  
`

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

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  height: 1000px;
  width: 100%;
  @media screen and (max-width: 1200px) {
    height: auto;
  }
`;
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
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  @media screen and (max-width: 640px) {
    padding:.3rem
  
}
`;

export const UtilityList = styled.a`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;


export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #9cc9e3;
font-size: 1.2rem;
`
export const Section = styled.section`
  display: flex;
  background: #000000;
  flex-direction: column;
  padding: 32px 48px 0px 48px;
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
`