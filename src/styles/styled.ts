import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  margin-top: -2rem;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

interface MarginTop {
  marginTop?: string;
}

export const ContainerParagraphs = styled.div<MarginTop>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const Paragraph = styled.p`
  display: flex;
  font-family: sans-serif;
  margin-bottom: 0.3rem;
`;
