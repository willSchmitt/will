import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const InstructorsSalesModuleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    header {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;

      margin-top: 6.25rem;
      h2 {
        color: ${({ theme }) => theme.colors.blue450};
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.375rem;

        text-align: center;
      }

      p {
        color: ${({ theme }) => theme.colors.blue600};
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;

        text-align: center;
      }
    }

    footer {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      h2 {
        color: ${({ theme }) => theme.colors.blue450};
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.375rem;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      header {
        h2 {
          font-size: 1.75rem;
          line-height: 2.125rem;
        }
      }
    }
  }
`;

export const CardsInstructors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.125rem;

  margin-bottom: 7.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 1.25rem;

    margin-bottom: 6.25rem;
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
    max-width: 48rem;
    width: 100%;

    img {
      max-width: 48rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    section {
      gap: 0.625rem;

      padding: 1.25rem;

      span {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;

  margin-top: 6.25rem;

  h3 {
    color: ${({ theme }) => theme.colors.blue450};
    font-family: "Albert Sans", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.375rem;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.687rem;

    text-align: center;

    width: 75%;

    strong {
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 2.5rem;

    h3 {
      font-size: 1.75rem;
      line-height: 2.125rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ButtonHelp = styled.div`
  background-color: ${({ theme }) => theme.colors.green500};
  border-radius: 6.25rem;
  padding: 1.25rem 3.75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 0.625rem;
  margin-bottom: 7.5rem;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Albert Sans", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.125rem;

    text-align: center;
  }

  &:hover {
    filter: brightness(1.1);
    transition: 0.4s;
  }
`;

export const LineSalesModule = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue50};

  margin-top: 6.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 3.75rem;
  }
`;
