import styled, { css } from "styled-components";

export const Container = styled.div``;

export const QuestionContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};

  display: flex;
  flex-direction: row;
  gap: 3.3125rem;

  > aside {
    color: ${({ theme }) => theme.colors.gray};
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;

    padding-block: 3rem;
    width: 2rem;
  }

  > main {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 3rem;

    padding-block: 3rem;

    > article {
      color: ${({ theme }) => theme.colors.blue600};
      font-size: 1.125rem;
      line-height: 1.625rem;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 2rem;
    
    > aside {
      padding-block: 2rem;
    }

    > main {
      gap: 2rem;
      padding-block: 2rem;
    }
  }
`;

export const QuestionButton = styled.button<{ isOpen?: boolean }>`
  all: unset;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.blue600};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    flex: 1;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      &::before {
        background: ${({ theme }) => theme.colors.blue600};
        content: "";

        margin-right: 2.5rem;
        height: 1px;
        width: 5rem;

        ${({ theme }) => theme.breakpoints.mobile} {
          margin-right: 1.125rem;
          width: 2rem;
        }
      }
    `}
`;
