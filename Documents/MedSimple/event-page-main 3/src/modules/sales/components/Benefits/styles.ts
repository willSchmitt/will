import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue300};

  ${Wrapper} {
    > main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5.125rem;

      margin-bottom: 8.475rem;

      ${({ theme }) => theme.breakpoints.mobile} {
        grid-template-columns: 1fr;

        margin-bottom: 6.06rem;

        gap: 4.25rem;
      }
    }

    h2 {
      color: ${({ theme }) => theme.colors.blue600};

      font-weight: 500;
      font-size: 3rem;
      line-height: 3.125rem;

      margin-top: 10rem;
      margin-bottom: 7.5rem;
      width: 80%;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    > ${Wrapper} {
      padding: 0 1.5rem;

      h2 {
        font-size: 1.875rem;
        line-height: 2.125rem;
        margin-top: 3.875rem;

        margin-bottom: 5rem;
        width: 100%;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  picture {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: flex-start;

    > picture {
      width: 4rem;
      height: 4rem;
      padding: 1.5rem;
      transform: translateY(10px);

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;

    margin-top: 1rem;
    width: 60%;
  }

  small {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;

    opacity: 0.8;

    width: 70%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    strong {
      font-size: 1.25rem;
      line-height: 1.75rem;
      width: 100%;
    }

    small {
      font-size: 1rem;
      line-height: 1.5rem;
      width: 100%;
    }
  }
`;
