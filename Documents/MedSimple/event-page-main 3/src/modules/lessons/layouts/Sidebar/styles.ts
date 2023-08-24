import styled, { css } from "styled-components";

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.blue500};

  display: flex;
  flex-direction: column;

  height: 100vh;

  > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 2rem;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;
      flex: 1;

      h3 {
        color: ${({ theme }) => theme.colors.gray200};
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: -2%;
      }

      small {
        color: ${({ theme }) => theme.colors.gray100};
        font-size: 0.75rem;
        line-height: 0.875rem;
      }
    }
  }

  > nav {
    display: flex;
    flex-direction: column;
    flex: 1;

    a.disabled {
      pointer-events: none;
    }
  }

  > footer {
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
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    height: auto;
  }
`;
