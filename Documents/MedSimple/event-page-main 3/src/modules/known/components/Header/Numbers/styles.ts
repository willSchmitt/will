import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  ${Wrapper} {
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    padding-top: 5rem;
    margin-bottom: 5rem;

    ${({ theme }) => theme.breakpoints.mobile} {
      border: 0;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      margin: 0 auto;
      padding: 2.5rem 1.5rem 5.25rem;
    }
  }
`;

export const Number = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 1.625rem;

  span {
    color: ${({ theme }) => theme.colors.gray200};

    font-weight: 500;
    font-size: 3.5rem;
    line-height: 4rem;

    strong {
      color: ${({ theme }) => theme.colors.green600};
    }
  }

  small {
    color: ${({ theme }) => theme.colors.gray200};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    max-width: 100%;

    span {
      font-size: 2.5rem;
      line-height: 3.5rem;

      display: flex;
      flex: 1;
    }

    small {
      font-size: 0.875rem;
      line-height: 1.375rem;
      text-align: left;

      display: flex;
      flex: 1;
    }
  }
`;
