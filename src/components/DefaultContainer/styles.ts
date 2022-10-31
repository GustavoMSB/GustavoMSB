import styled, { keyframes } from "styled-components";
import { lighten } from 'polished';

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
  background: #090a10;
  display: flex;
  position: relative;
`;

export const Header = styled.header`
  width: 19%;
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #fff;

  .start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .react-logo {
    animation: ${animation} 20s linear infinite;
    margin-bottom: 1rem;
  }

  h3 {
    @media (max-width: 1400px){
      font-size: 1.5rem;
    }

    @media (max-width: 1169px){
      font-size: 1.35rem;
    }

    @media (max-width: 1085px) {
      font-size: 1.25rem;
    }
  }

  h1 {
    font-family: 'Silkscreen', cursive;
    color: #00eb80;
  }

  .menu {
    border: 1px solid #fff;
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    background: transparent;
    
    @media (min-width: 951px){
      display: none;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
    height: 10vh;
    top: 0;

    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
    h1 {
      display: none;
    }

    h3, .react-logo {
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  width: 81%;
  height: 100vh;
  position: absolute;
  right: 0;

  @media (max-width: 950px) {
    width: 100%;
    margin-top: 10vh;
    min-height: 90vh;
  }
`;

export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  color: #fff;
  width: 100%;
  
  button {
    padding: 0 1.5rem;
    height: 3rem;
    background: #2a005f;
    border: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    width: 100%;
    position: relative;
    transition: background 0.5s;

    &:hover, &:focus {
      background: ${lighten(0.15, '#2a005f')};
      border-radius: 1rem;

      &.active {
        border-radius: 0;
      }
    }

    &.active {
      padding: 0 1.25rem;
      border-left: 4px solid #00eb80;
    }

    @media (max-width: 977px){
      font-size: 0.9rem;
    }

    @media (max-width: 950px){
      font-size: 1rem;
      padding: 1rem;

      &.active {
      padding: 1rem 0.75rem;
        border-left: 4px solid #00eb80;
      }
    }
  }

  @media (max-width: 950px){
    flex-direction: row;
    display: ${({ isActive }) => isActive ? 'flex' : 'none'};
    padding-top: 1.5rem;

    background: #2a005f;
    position: absolute;
    top: 10vh;
    margin: 0;
    left: 0;
    width: 100%;
    flex-direction: column;
  }
`;