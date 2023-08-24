import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.main`
  ${Wrapper} {
    padding-top: 12.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    /* display: grid;
    grid-template-columns: 25% 1fr; */

    > aside {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      /* margin-top: 3rem; */

      span {
        color: ${({ theme }) => theme.colors.blue600};
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-transform: uppercase;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4.6875rem;

        transform: rotate(270deg) translateX(-86px) translateY(-82px);

        &:before {
          background: ${({ theme }) => theme.colors.blue600};
          content: "";

          display: flex;

          height: 1px;
          width: 3.25rem;
        }

        ${({ theme }) => theme.breakpoints.mobile} {
          transform: none;

          &:before {
            display: none;
          }
        }
      }
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    > ${Wrapper} {
      display: flex;
      flex-direction: column;
      padding-top: 7.5rem;

      > aside {
        padding: 0 0.5rem;

        span {
          transform: rotate(0) translateX(0) translateY(0);
        }
      }
    }
  }
`;

export const InstructorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 12.5rem;

  width: 100%;
  max-width: 56.25rem;

  h2 {
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.125rem;

    letter-spacing: -2%;
    color: ${({ theme }) => theme.colors.blue600};

    width: 60%;
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;
    opacity: 0.8;

    color: ${({ theme }) => theme.colors.blue600};
    width: 60%;
  }

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 4rem;
    margin-bottom: 8.375rem;

    > header {
      gap: 1.5rem;
      padding: 0 0.5rem;
    }

    h2 {
      margin-top: 2rem;
      font-size: 1.875rem;
      line-height: 2.125rem;
      width: 100%;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      width: 100%;
    }
  }
`;

export const Instructor = styled.div`
  display: flex;
  gap: 4.5rem;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  small {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;

    color: ${({ theme }) => theme.colors.blue600};
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;

    color: ${({ theme }) => theme.colors.blue600};
    opacity: 0.8;

    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 1rem;
    padding: 0 0.5rem;
    

    small {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
