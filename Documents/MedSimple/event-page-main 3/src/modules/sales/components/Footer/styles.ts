import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  ${Wrapper} {
    border-top: 1px solid ${({ theme }) => theme.colors.gray500};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;
  }

  small {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    small {
      font-size: 0.875rem;
      line-height: 1.375rem;
      width: 100%;

      display: flex;
      flex-direction: column;
    }

    strong {
      font-weight: 400;
    }
  }
`;

export const UpTop = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;

    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    img {
      height: 0.875rem;
    }

    span {
      display: none;
    }

    
  }
`;
