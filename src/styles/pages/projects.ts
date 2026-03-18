
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    opacity: 0.2;
    left: -500px;
  }

  to {
    opacity: 1;
    left: 0;
  }
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgroundPages};
  height: 100%;
  padding: 3rem 2rem;
  position: relative;
  animation: ${animation} 1s ease-in-out;

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
  }

  h6 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
`;