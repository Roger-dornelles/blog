import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  font-family: sans-serif;
  flex-direction: column;
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

export const H2 = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  border: 1px solid #c4c4c4;
  padding: 1.2rem;
  border-radius: 5px;

  @media (max-width: 1230px) {
    width: 60%;
  }

  @media (max-width: 1080px) {
    width: 70%;
  }

  @media (max-width: 950px) {
    font-size: 17px;
  }

  @media (max-width: 780px) {
    width: 80%;
    font-size: 17px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const PostTitle = styled.strong`
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const PostBody = styled.p`
  margin-bottom: 1rem;
  line-height: 1.3rem;
`;

export const CommentsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`;

export const Comments = styled.div`
  width: calc(90% / 3);
  display: flex;
  justify-content: center;
  height: 10rem;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 0.5rem;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1650px) {
    height: 12rem;
  }
  @media (max-width: 1230px) {
    height: 14rem;
  }

  @media (max-width: 1230px) {
    width: calc(90% / 2);
  }

  @media (max-width: 950px) {
    font-size: 17px;
  }

  @media (max-width: 780px) {
    width: 90%;
    font-size: 17px;
  }

  @media (max-width: 420px) {
    font-size: 17px;
    height: 16rem;
  }

  @media (max-width: 280px) {
    font-size: 17px;
    height: 22rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 0.6rem;
`;

export const Span = styled.span`
  padding: 0.5rem;
`;

export const Paragraphs = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
