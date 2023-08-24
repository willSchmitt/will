  import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;

  padding-top: 12.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 4rem;

    padding-top: 7.5rem;
  }
`;
