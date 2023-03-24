import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  display: flex;
  width: calc(95% / 3);
  height: 200px;
  padding: 0.5rem;
  border: 1px solid rgb(240, 234, 228);
  margin: 0.5rem;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #797878;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  p {
    padding: 0.7rem;
  }

  &:hover {
    border: 1px solid rgb(192, 187, 182);
    background-color: #fdfdfd;
    color: #000;
  }

  @media (max-width: 1085px) {
    justify-content: center;
    align-items: center;
    width: calc(90% / 2);
    height: 300px;
    margin: 0.5rem;
    font-size: 18px;
  }

  @media (max-width: 920px) {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 90%;

    margin: 1rem;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 90%;

    margin: 1rem;
  }

  @media (max-width: 420px) {
    font-size: 18px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    margin: 1rem 0;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  margin-bottom: 2rem;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 17px;
`;
