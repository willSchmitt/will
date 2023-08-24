import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.main`
  ${Wrapper} {
    display: grid;
    flex-direction: row;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    ${({ theme }) => theme.breakpoints.mobile} {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.blue300};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 2rem;

  padding: 2rem;

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;

  }

  small {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2rem;

    flex: 1;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    span {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }

    small {
      font-size: 1.5rem;
      line-height: 1.875rem;
    }
  }
`;
