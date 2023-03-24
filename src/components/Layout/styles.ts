import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 2rem;
  margin: 0 auto;
  right: 1rem;
`;

export const Header = styled.header`
  z-index: 9999;
  display: flex;
  padding-top: 2rem;
  ul {
    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      padding-right: 0.8rem;

      a {
        text-decoration: none;
        color: #797979;
        font-size: 17px;
        font-style: normal;
      }
    }
  }
`;

export const LinkActive = styled.div`
  a {
    border-bottom: 1px solid #000;
    color: #f36574 !important;
  }
`;
