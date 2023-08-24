import styled from "styled-components";

export const SalesContainer = styled.main`
  background: ${({ theme }) => theme.colors.blue500};

  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 0rem;
  }
`;
