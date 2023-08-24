import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.header`
  padding-top: 2.25rem;
  margin-bottom: 4.5rem;
  
  ${Wrapper} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    ${({ theme }) => theme.breakpoints.mobile} {
      nav {
        display: none;
      }

      button {
        font-size: 0.875rem;
        line-height: 1.375rem;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    > a {
      border-bottom: 2px solid transparent;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.625rem;

      transition: all 0.2s;

      &:hover {
        border-color: ${({ theme }) => theme.colors.green600};
      }
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.blue200};
    border-radius: 6.25rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.375rem;

    height: 3rem;
    padding: 0 2rem;

    &:hover {
      filter: brightness(1.1);
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    nav {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 2rem;

    ${Wrapper} {
      padding: 0 1.5rem;
    }
  }
`;
