import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0 1.5rem;
    border-bottom: 0;
  }
`;

export const FacebookContainer = styled.div`
  display: block;
  
  width: 100%;
`;
