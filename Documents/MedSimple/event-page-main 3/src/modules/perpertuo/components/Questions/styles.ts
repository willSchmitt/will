import styled, { css } from "styled-components";

export const QuestionContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};

  display: flex;
  flex-direction: column;

  > main {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 3rem;


    > article {
      color: ${({ theme }) => theme.colors.blue600};
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.625rem;

      opacity: 0.8;

      padding-left: 3rem;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 0;

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

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  border-top: 1px solid ${({theme}) => theme.colors.blue50};
  padding-top: 2.5rem;


  span {
    font-family: 'Albert Sans', sans-serif;
    color: ${({ theme }) => theme.colors.blue600};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
  }

  > aside {
    color: ${({ theme }) => theme.colors.gray};
    font-family: 'Albert Sans', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  span {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 3.5rem;

    ${({ isOpen }) =>
      isOpen &&
      css`
        &::before {
          background: ${({ theme }) => theme.colors.blue600};
          content: "";

          margin-right: 2.5rem;
          height: 1px;
          width: 5rem;

          @media (max-width: 640px) {
            margin-right: .5rem;
            width: 2rem;
          }
        }
      `}

    @media (max-width: 640px) {
      display: flex;
      gap: 1.125rem;
      align-items: flex-center;
    }
  }

  @media (max-width: 640px) {
    gap: 1.75rem;
  }
`;
