import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const InstructorsPerpetuoContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.gray200};
  padding-bottom: 9.5rem;

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: 5rem;
    padding-bottom: 3.75rem;
  }
`;

export const HeaderInstructors = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.colors.blue450};
    font-family: "Albert Sans", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.375rem;

    text-align: center;
  }

  small {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    h2 {
      font-size: 1.75rem;
      line-height: 2.125rem;
    }
  }
`;

export const CardsInstructors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.125rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const CardInstructors = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;

  max-width: 25rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  img {
    object-fit: fill;
  }

  > section {
    padding: 2.5rem;

    span {
      color: ${({ theme }) => theme.colors.blue450};
      font-family: "Albert Sans", sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.125rem;
    }

    p {
      color: ${({ theme }) => theme.colors.blue600};
      font-family: "Albert Sans", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    align-items: center;
    margin: 0 auto;

    img {
      width: 100%;
      object-fit: contain;
    }

    section {
      gap: 0.625rem;

      span {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
`;
