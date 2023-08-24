import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.main`
  ${Wrapper} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5.75rem;

    > picture {
      border-radius: 0.5rem; 

      max-width: 600px;
      width: 100%;

      overflow: hidden;

      img {
        all: unset;
        
        width: 100%;
        object-fit: cover;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      flex-direction: column;
      gap: 2.75rem;
      align-items: flex-start;

      > picture {
        max-width: 100%;
      }
    }
  }
`;

export const Infos = styled.div`
  width: 80%;

  h2 {
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.125rem;

    color: ${({ theme }) => theme.colors.blue600};
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;

    color: ${({ theme }) => theme.colors.blue600};
  }

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 1.5rem;
    width: 100%;
    padding: 0 0.5rem;

    h2 {
      font-size: 1.875rem;
      line-height: 2.125rem;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;

      opacity: 0.8;
    }
  }
`;

export const Students = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > small {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.375rem;

    color: ${({ theme }) => theme.colors.blue600};

    b {
      font-weight: 500;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    small {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
  }
`;
