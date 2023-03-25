import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Link = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  color: red;

  a {
    text-decoration: none;
    color: red;
  }
`;

export const Error = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;

export const InfoUser = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #999999;
  border-radius: 5px;

  p {
    padding: 0.3rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 920px) {
    width: 100%;
    font-size: 18px;
  }

  @media (max-width: 820px) {
    width: 90%;
    font-size: 18px;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
  @media (max-width: 440px) {
    width: 100%;
    font-size: 18px;
  }

  @media (max-width: 280px) {
    margin-bottom: 1.5rem;
  }
`;
