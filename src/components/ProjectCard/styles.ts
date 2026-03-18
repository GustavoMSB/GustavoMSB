import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'};
  border: 1px solid ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: ${({ theme }) => theme.colors.text};
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 10px 40px ${({ theme }) => theme.colors.secondary}22;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.gray4};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Container}:hover & img {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex: 1;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    background: rgba(0, 229, 255, 0.1);
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
