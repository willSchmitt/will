import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const CurrentContainer = styled.div`
  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 7.5rem;

    ${({ theme }) => theme.breakpoints.mobile} {
      gap: 6.25rem;
    }
  }
`;

export const Currents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  section {
    background-color: ${({ theme }) => theme.colors.blue600};
    border-radius: 1.25rem;

    padding: 3.75rem;
    margin-top: 6.25rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    max-width: 48rem;
    width: 100%;

    h2 {
      color: ${({ theme }) => theme.colors.yellow500};
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.75rem;

      text-align: center;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    section {
      h2 {
        line-height: 2.375rem;
      }
    }

    button {
      max-width: 48rem;
      width: 100%;
    }
  }
`;

export const DescriptionCurse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Descriptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;

  picture {
    background-color: ${({ theme }) => theme.colors.blue450};
    border-radius: 0.125rem;
    font-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0.25rem;
  }

  small {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    picture {
      max-width: 2.5rem;
      max-height: 2.5rem;
      width: 100%;
      height: 100%;

      padding: 1.5rem;
    }

    small {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
`;

export const Bonus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  margin-bottom: 6.25rem;

  h2 {
    color: ${({ theme }) => theme.colors.blue450};
    font-weight: 800;
    font-size: 3.125rem;
    line-height: 3.75rem;

    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    h2 {
      font-size: 2rem;
      line-height: 2.375rem;
    }
  }
`;

export const BonusBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const CardBonus = styled.div`
  max-width: 21.25rem;
  width: 100%;

  img {
    border-radius: 0.625rem 0.625rem 0 0;
  }

  section {
    background-color: ${({ theme }) => theme.colors.blue450};
    border-radius: 0 0 1.25rem 1.25rem;

    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    padding: 2.5rem 1.25rem;

    top: -1rem;
    position: relative;

    small {
      color: ${({ theme }) => theme.colors.yellow500};
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.125rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 48rem;
    width: 100%;

    img {
      max-width: 48rem;
      width: 100%;
      object-fit: fill;
    }

    section {
      padding: 2.5rem 0.94rem;
    }
  }
`;
