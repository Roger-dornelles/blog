import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
`;

export const H2 = styled.h2`
  margin: 1.5rem;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UsersContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

export const Li = styled.li`
  width: calc(100% / 3);
  list-style: none;
  padding: 0.5rem;

  @media (max-width: 1080px) {
    width: calc(100% / 2);
  }

  @media (max-width: 800px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #ccc;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #646464;
    p {
      padding: 0.3rem;
    }
  }
  a:hover {
    color: #3e3e3e;
  }

  &:hover {
    border: 1px solid #999999;
  }
`;
