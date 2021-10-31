import styled from 'styled-components';

export const SectionTitle = styled.h2`
  text-align: left;
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  max-width: 100%;
  color: #fff;
  margin-bottom: 16px;
  padding: 120px 0 0;

  @media screen and (max-width: 1000px){
    font-size: 56px;
    line-height: 56px;
    padding: 80px 0 12px;
  }

  @media screen and (max-width: 640px){
    font-size: 32px;
    line-height: 40px;
    padding: 16px 0 0;
    max-width: 100%;
    margin-bottom: 100px;
  }
  `;

  export const SectionText = styled.p`
  max-width: 800px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: #b4bab9;
  
  @media screen and (max-width: 768px){
    font-size: 18px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 640px){
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    margin-top: -100px;
  }
`;

  export const Section = styled.section`
  background: #000;
  padding: 32px 48px 0;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`


export const ImgWrap = styled.div`
    margin-top: 200px;
    height: 100%;
    
`;

export const Img = styled.img`
    width: 100%;
    position: relative;;
    max-height: 100%;
    margin: -150px 0 10px 0;
    filter: gray;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        -webkit-transform:scale(1.05);
        -webkit-filter: grayscale(1);
        filter: none;
    }

`;
