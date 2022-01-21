import styled from 'styled-components';

export const Section = styled.section`
  
  padding: 20px 60px 50px;
  background: #000;
  position: absolute;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 24px 48px 0;
  }

  @media screen and (max-width: 640px) {
    padding: 16px 16px 0;

  }
`;

export const SectionText = styled.p`
  color: #58cced;
  text-align: center; 
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;

  }
`;

export const Heading1 = styled.h1`
    text-align: left;
    font-weight: 800;
    font-size: 65px;
    line-height: 72px;
    max-width: 100%;
    color: #ffffff;
    margin-bottom: 16px;
    padding: 30px 100px 16px;

    @media (max-width: 1000px) {
      text-align: center;
      font-size: 48px;
    } 
    @media (max-width: 450px) {
      font-size: 32px;
    }


`;

export const Heading2 = styled.h2`
    text-align: left;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    max-width: 100%;
    color: #ffffff;
    margin-bottom: 16px;
    padding: 50px 0;
    
    @media (max-width: 1000px) {
      display: none;
    }  
`;

export const Line = styled.div`
  border-left: 2px solid #58cced;
  margin-top: 50px;
  height: 50%;
  position: absolute;
  left: 50%;

  @media (max-width: 1000px) {
    border-left: 0;
    margin-top: 20px;
    left: 0;
    border-top: 2px solid #58cced;
    width: 100%;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-column-gap: 250px;
   
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 125px;
  padding-right: 150px;
  margin-top: -50px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 20px;
    justify-content: center;
  } 
`;

export const MediaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  align-items: left;
  padding-left: 50%;
   
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding-left: 0;
    align-items: center;
    margin-top: -30px;
    
  }
`;
