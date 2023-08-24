import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  ${Wrapper} {
    flex-direction: row;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.breakpoints.mobile} {
      flex-direction: column;

      h3 {
        width: 100%;
        text-align: center;

      }
    }
  }

  h3 {
    width: 30%;

    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.625rem;

    text-align: right;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 5rem;
    margin-bottom: 2.5rem;

    h3 {
      font-size: 1.25rem;
      line-height: 1.5rem;

      padding: 0 2rem;
    }
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Time = styled.div`
  background: ${({ theme }) => theme.colors.blue200};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  height: 7.125rem;
  width: 7.125rem;

  strong {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 2.5rem;

    color: ${({ theme }) => theme.colors.gray200};
  }

  small {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;

    color: ${({ theme }) => theme.colors.gray200};
  }
`;
