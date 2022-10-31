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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 2rem;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundPages};
    color: #fff;
    

    .header, main {
      position: relative;
      animation: ${animation} 1s ease-in-out;
    }

    main {
      a {
        color: ${({ theme }) => theme.colors.green};
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }


    h1, h4 {
        margin-bottom: 2rem;
    }

    @media (max-width: 950px) {
      padding: 2rem 1rem;
    }

`;