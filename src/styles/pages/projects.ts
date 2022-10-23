import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  background: ${({ theme }) => theme.colors.backgroundPages};
  height: 100%;
  padding: 3rem 2rem;
`;