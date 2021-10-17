import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  height: 100vh;
  background: #000;
  flex-direction: column;
  padding: 24px 48px 0;
  align-items: center;
  @media screen and (max-width: 768px) {
    
    flex-direction: column;
  }
`

export const ResumeWrap = styled.div`
  height: auto;
  width: auto;
`
