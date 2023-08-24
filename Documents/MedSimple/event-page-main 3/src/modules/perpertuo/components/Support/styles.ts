import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const SupportContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.gray200};

  ${Wrapper} {
    padding-bottom: 12.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12.5rem;

    ${({ theme }) => theme.breakpoints.mobile} {
      gap: 3.75rem;

      padding-bottom: 5rem;
    }
  }
`;

export const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue50};

  width: 100%;
`;

export const SupportSection = styled.div`
  max-width: 42.625rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;

  margin-top: 6.25rem;

  > img {
    max-width: 42.625rem;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column-reverse;
    gap: 1.25rem;

    margin: 0 auto;

    > img {
      margin-top: 6.25rem;

      object-fit: contain;
    }
  }
`;

export const HeaderSupport = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;

  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    text-align: center;
  }

  strong {
    background-color: ${({ theme }) => theme.colors.yellow500};
    border-radius: 0.625rem;

    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.56rem;
    text-align: center;

    padding: 0.312rem 0.625rem;
  }

  > header {
    display: flex;
    align-items: center;
    flex-direction: column;

    > h2 {
      color: ${({ theme }) => theme.colors.blue450};
      font-family: "Albert Sans", sans-serif;
      font-weight: 800;
      font-size: 2.5rem;
      line-height: 3rem;

      text-align: center;
    }
    small {
      background-color: ${({ theme }) => theme.colors.yellow500};
      border-radius: 0.625rem;

      color: ${({ theme }) => theme.colors.blue600};
      font-family: "Albert Sans", sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.125rem;

      padding: 0.312rem 0.625rem;
      transform: rotate(-1.82deg);
    }
  }
`;

export const AppMedSimple = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  padding: 3.75rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  header {
    h2 {
      color: ${({ theme }) => theme.colors.blue450};
      font-family: "Albert Sans", sans-serif;
      font-size: 2.5rem;
      line-height: 3rem;
      font-weight: 800;
    }

    small {
      color: ${({ theme }) => theme.colors.blue600};
      font-family: "Albert Sans", sans-serif;
      font-size: 2rem;
      line-height: 2.75rem;
      font-weight: 400;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;

    header {
      h2 {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }

      small {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
`;

export const ButtonsDownload = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.75rem;

  section {
    display: flex;
    flex-direction: column;
  }

  ${({theme}) => theme.breakpoints.mobile} {
    margin: 0 auto;
  }
`;

export const ButtonApple = styled.a`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  padding: 0.8rem;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  section {
    > small {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
    }
    > strong {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &:hover {
    filter: brightness(0.5);
    transition: filter 0.4s;
  }

  ${({ theme }) => theme.breakpoints.mobile} {

    section {
      strong {
        font-size: 1.5rem;
      }
    }
  }
`;

export const ButtonGoogle = styled.a`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  padding: 0.8rem;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  section {
    > small {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
    }
    > strong {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &:hover {
    filter: brightness(0.5);
    transition: filter 0.4s;
  }

  ${({ theme }) => theme.breakpoints.mobile} {

section {
  strong {
    font-size: 1.5rem;
  }
}
}
`;
