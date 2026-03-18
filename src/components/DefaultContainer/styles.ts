import styled, { keyframes } from "styled-components";

interface MenuProps {
  isActive: boolean;
}

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPages};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(9, 9, 11, 0.65)' : 'rgba(255, 255, 255, 0.65)'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  color: ${({ theme }) => theme.colors.title};

  .start {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: row;
  }

  .react-logo {
    animation: ${animation} 20s linear infinite;
    display: flex;
    align-items: center;
  }

  h3 {
    margin: 0;
    @media (max-width: 1400px){ font-size: 1.5rem; }
    @media (max-width: 1169px){ font-size: 1.35rem; }
    @media (max-width: 1085px){ font-size: 1.25rem; }
  }

  h1 {
    margin: 0;
    font-family: 'Silkscreen', cursive;
    color: ${({ theme }) => theme.colors.secondary};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.secondary}55;
    font-size: 1.2rem;
  }

  .menu {
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    background: transparent;
    
    @media (min-width: 951px){
      display: none;
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 950px) {
    padding: 0 1.5rem;
    
    .start {
        gap: 0.5rem;
    }
        
    h1 {
      display: none;
    }

    h3, .react-logo {
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 80px; 
  min-height: 100vh;
`;

export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  button {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;

    &:hover, &:focus {
      background: rgba(255, 255, 255, 0.05);
      color: ${({ theme }) => theme.colors.title};
    }

    &.active {
      color: ${({ theme }) => theme.colors.secondary};
      background: rgba(0, 229, 255, 0.1);
    }
  }

  @media (max-width: 950px){
    display: ${({ isActive }) => isActive ? 'flex' : 'none'};
    background: ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(9, 9, 11, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);

    button {
        width: 100%;
        justify-content: flex-start;
        padding: 1rem;
        font-size: 1.1rem;
    }
  }
`;

export const TogglersWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 950px) {
    /* Kept relative or adjust if needed */
  }
`;

export const ThemeToggler = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  font-size: 1.2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }

  @media (max-width: 950px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;