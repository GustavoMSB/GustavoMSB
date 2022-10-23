import styled, { keyframes } from "styled-components";
import { lighten } from 'polished';

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
  background: #2a005f;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #fff;

  .react-logo {
    animation: ${animation} 20s linear infinite;
    margin-bottom: 1rem;
  }

  h1 {
    font-family: 'Silkscreen', cursive;
    color: #00eb80;
  }
`;

export const Wrapper = styled.div`
  width: 79%;
`;

export const Menu = styled.nav`
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
    border-radius: 1rem;
    position: relative;
    transition: background 0.5s;

    &:hover, &:focus {
      background: ${lighten(0.15, '#2a005f')};
    }

    &.active {
      padding: 0;
      &::before {
        margin-right: calc(1rem - 2px);
        content: "";
        background: #00eb80;
        height: 2rem;
        width: 2px;
        display: block;
      }
    }
  }
`;