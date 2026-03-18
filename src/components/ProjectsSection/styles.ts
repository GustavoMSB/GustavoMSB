import styled from 'styled-components';

export const Container = styled.section`
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.colors.backgroundPages};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    padding: 4rem 1.5rem;
  }

  .header {
    margin-bottom: 4rem;
    text-align: center;

    h2 {
      font-size: 3rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
