import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blue500};
  padding-top: 9.8rem;
  padding-bottom: 10rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 7.5rem;

    > main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    ${Wrapper} {
      > main {
        gap: 1rem;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ${Wrapper} {
      gap: 3rem;

      > main {
        gap: 2rem;

        grid-template-columns: 1fr;
      }
    }
  }
`;

export const TitlePlans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > small {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
    letter-spacing: -1%;

    text-transform: uppercase;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.125rem;

    text-align: center;
    width: 80%;
    letter-spacing: -2%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 1rem;

    small {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.625rem;
      text-transform: unset;
    }

    h2 {
      font-size: 1.875rem;
      line-height: 2.125rem;
      text-align: center;

      width: 100%;
    }
  }
`;
