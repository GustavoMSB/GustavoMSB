import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
  background: ${({ theme }) => theme.colors.backgroundPages};
  position: relative;
  overflow: hidden;

  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
    filter: blur(80px);
    pointer-events: none;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.4;
    transition: all 1s ease;
  }

  .blob-1 {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
    background: ${({ theme }) => theme.colors.secondary};
    animation: float 20s infinite alternate;
  }

  .blob-2 {
    width: 300px;
    height: 300px;
    bottom: -50px;
    left: -50px;
    background: ${({ theme }) => theme.colors.tertiary};
    animation: float 15s infinite alternate-reverse;
  }

  .blob-3 {
    width: 250px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.green};
    animation: float 25s infinite linear;
  }

  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg) scale(1); }
    33% { transform: translate(100px, 50px) rotate(120deg) scale(1.1); }
    66% { transform: translate(-50px, 100px) rotate(240deg) scale(0.9); }
    100% { transform: translate(0, 0) rotate(360deg) scale(1); }
  }

  @keyframes revealText {
    from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }

  @media (max-width: 950px) {
    padding: 0 1.5rem;
    align-items: center;
    text-align: center;
  }

  .content {
    max-width: 800px;
    z-index: 10;
    position: relative;
  }

  .reveal-text {
    animation: revealText 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  .reveal-text-delayed {
    opacity: 0;
    animation: revealText 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.title};
    line-height: 1.1;
    display: flex;
    flex-direction: column;

    .line {
      display: block;
    }

    .line.accent {
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.tertiary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }

    a {
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &.primary {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.backgroundPages};
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px ${({ theme }) => theme.colors.secondary}40;
        }
      }

      &.secondary {
        background: transparent;
        color: ${({ theme }) => theme.colors.text};
        border: 1px solid ${({ theme }) => theme.colors.gray1};

        &:hover {
          color: ${({ theme }) => theme.colors.title};
          border-color: ${({ theme }) => theme.colors.title};
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }
  }
`;
