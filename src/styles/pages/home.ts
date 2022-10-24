import styled, { keyframes } from "styled-components";

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
    padding: 3rem 2rem;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundPages};
    color: #fff;
    

    .header {
      position: relative;
      animation: ${animation} 1s ease-in-out;
    }


    h1 {
        margin-bottom: 2rem;
    }

`;