import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const EbookContainer = styled.div`
  ${Wrapper} {
    margin-top: 5rem;
    padding-bottom: 10rem;

    display: flex;
    flex-direction: row;
    gap: 10rem;

    ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: 3.375rem;
      padding-bottom: 5rem;

      gap: 3.75rem;
      flex-direction: column;
    }
  }
`;

export const AboutEbook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 50%;

  h2 {
    color: ${({ theme }) => theme.colors.blue450};
    font-family: "Albert Sans", sans-serif;
    font-size: 2rem;
    line-height: 2.812rem;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    section {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1.25rem;

      small {
        background-color: ${({ theme }) => theme.colors.blue450};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 0.125rem;

        font-weight: 800;
        font-family: "Albert Sans", sans-serif;

        padding: 0.612rem;

        width: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        color: ${({ theme }) => theme.colors.blue600};
        font-family: "Albert Sans", sans-serif;
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 500;
      }
    }
  }

  footer {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

    margin-top: 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;

    h2 {
      font-size: 1.75rem;
      line-height: 2.5rem;
    }

    main {
      gap: 1.875rem;

      section {
        gap: 0.675rem;
        span {
          font-size: 1.125rem;
          line-height: 1.68rem;
        }
      }
    }
  }
`;

export const FormEbook = styled.div`
  background-color: ${({ theme }) => theme.colors.blue450};
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  padding: 2.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.625rem;

    strong {
      color: ${({ theme }) => theme.colors.white};
      font-family: "Albert Sans", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2.125rem;
      text-align: center;
    }

    small {
      color: ${({ theme }) => theme.colors.white};
      font-family: "Albert Sans", sans-serif;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.5rem;
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;

    input {
      background-color: ${({ theme }) => theme.colors.gray200};
      border-radius: 0.625rem;
      border: none;

      width: 100%;
      padding: 1.05rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors.black};
        font-family: "Albert Sans", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
      }
    }
  }

  footer {
    p {
      color: ${({ theme }) => theme.colors.white};
      font-family: "Albert Sans", sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-align: center;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 2.5rem 1.25rem;
    width: 100%;

    header {
      small {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    form {
      align-items: flex-start;
      width: 100%;
    }

    button {
      max-width: 48rem;
      width: 100%;
    }
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;

    align-items: flex-start;
    width: 100%;
  }
`;
