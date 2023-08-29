import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const PerpetuoContainer = styled.main`
  background-image: url(/images/imagesPerpetuo/bg.png);
  ${Wrapper} {
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625rem;

      padding-top: 3.75rem;
      padding-bottom: 3.75rem;

      img {
        margin-bottom: 1.875rem;
      }

      h1 {
        font-family: "Albert Sans", sans-serif;
        font-weight: 800;
        line-height: 3rem;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.yellow500};
        text-align: center;
      }

      p {
        font-family: "Albert Sans", sans-serif;
        font-weight: 400;
        line-height: 1.5rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      section {
        h1 {
          font-size: 1.5rem;
          line-height: 1.75rem;
        }

        img {
          margin-bottom: 0.5rem;
        }

        p {
          text-align: center;
        }
      }
    }
  }
`;

export const CardHeaderPerpetuo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem 1.25rem 0 0;
  padding: 2.5rem 2.5rem 1.25rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.blue600};
    font-size: 1.5rem;
    font-family: "Albert Sans", sans-serif;
    line-height: 2.125rem;
    text-align: center;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    h2 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`;

export const Methods = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;

  small {
    background-color: ${({ theme }) => theme.colors.blue450};
    padding: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    border-radius: 0.125rem;
    font-size: 1rem;

    max-width: 2.5rem;
    max-height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    align-items: flex-start;
    padding-bottom: 1.8rem;
  }
`;

export const VideoHeaderPerpetuo = styled.div`
  margin-bottom: 2.5rem;

  iframe {
    width: 105%;
    height: 40rem;
    margin: 0 auto;
    margin-left: -1.75rem;
    border-radius: 1.25rem;
  }

  p {
    font-family: "Albert Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    color: ${({ theme }) => theme.colors.white};
    text-align: center;

    margin-top: 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 0rem;

    margin-bottom: 1.25rem;

    iframe {
      width: 100%;
      max-height: 22.75rem;
      margin-left: 0;
      position: relative;
      top: -2rem;
    }
  }
`;

export const ButtonHeaderPerpetuo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;

  margin-bottom: 18rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 10rem;

    img {
      max-width: 17rem;
      width: 100%;

      object-fit: contain;
    }
  }
`;
