import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  height: 100vh;
  width: 100vw;

  h2 {
    color: ${({ theme }) => theme.colors.blue600};
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3rem;
    text-align: center;
  }

  > main {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 24rem));
    grid-gap: 2rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    height: auto;

    padding: 2rem 1rem;

    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
    }

    > main {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }
`;

export const TrailContainer = styled.button`
  all: unset;
  background: ${({ theme }) => theme.colors.blue300};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.blue600};
  cursor: pointer;
  text-align: center;
  outline: 2px solid transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  transition: all 0.2s;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.blue500};
    outline-offset: 0.2rem;
  }

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 1.5rem;

    picture {
      background: ${({ theme }) => theme.colors.blue500};
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 5rem;
      width: 5rem;
      margin-bottom: 2rem;

      &.ciclo-basico {
        background: ${({ theme }) => theme.colors.green600};
      }

      &.internato {
        background: ${({ theme }) => theme.colors.blue600};
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        font-size: 1.75rem;
        line-height: 2rem;
      }

      span {
        font-size: 1.25rem;
        line-height: 2rem;
      }
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.625rem;

    flex: 1;

    padding: 0 2rem;
  }

  > footer {
    border-top: 1px solid ${({ theme }) => theme.colors.white};

    font-size: 1rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.5rem;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    > header {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;

      width: 100%;
      padding: 2rem 2rem 0.5rem;

      picture {
        margin: 0;
      }

      > div {
        align-items: flex-start;
        text-align: left;
      }
    }

    p {
      text-align: left;
    }

  }
`;
