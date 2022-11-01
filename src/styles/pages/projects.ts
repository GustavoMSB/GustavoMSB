import { darken } from 'polished';
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
  color: #fff;
  background: ${({ theme }) => theme.colors.backgroundPages};
  height: 100%;
  padding: 3rem 2rem;
  position: relative;
  animation: ${animation} 1s ease-in-out;
`;