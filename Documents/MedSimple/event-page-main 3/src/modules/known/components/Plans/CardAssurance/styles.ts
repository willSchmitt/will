import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blue400};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  padding: 2.5rem;
  border-radius: 0.5rem;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
    margin-top: 4rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 2rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    h2 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`;
