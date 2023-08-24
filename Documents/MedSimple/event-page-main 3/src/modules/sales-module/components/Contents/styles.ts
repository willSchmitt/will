import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const ContentsContainer = styled.div`
  ${Wrapper} {
    margin-top: 6.25rem;
    padding-bottom: 6.25rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h2 {
      color: ${({ theme }) => theme.colors.blue450};
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.812rem;
      text-align: center;
    }

    button {
      margin-top: 1.25rem;

      margin: 0 auto;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: 3.75rem;
      padding-bottom: 3.75rem;
    }

    h2 {
      font-size: 1.75rem;
      line-height: 2.5rem;
      text-align: start;
    }

    button {
      margin-top: none;
      max-width: 48rem;
      width: 100%;
    }
  }
`;

export const Boxs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  border-radius: 0.312rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2.5rem;

  header {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    align-items: center;

    picture {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 0.125rem;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.312rem;
    }

    small {
      color: ${({ theme }) => theme.colors.yellow500};
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }

  section {
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 2.5rem 1.25rem;

    header {
      gap: 0.625rem;

      picture {
        max-width: 3.125rem;
        max-height: 3.125rem;
        width: 100%;
        height: 100%;

        img {
          max-width: 2.5rem;
          max-height: 2.5rem;
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }

      small {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
`;
