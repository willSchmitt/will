import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 2rem;

  > strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375rem;

    margin-bottom: 0.75rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    
  }
`;
