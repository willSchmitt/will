import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const AboutContainer = styled.div`
  background-image: url(/images/imagesPerpetuo/bgAbout.png);
  background-repeat: no-repeat;
  background-size: cover;

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h2 {
      margin-top: 5rem;

      color: ${({ theme }) => theme.colors.white};
      font-family: "Albert Sans", sans-serif;
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.375rem;

      text-align: center;
    }

    section {
      margin-bottom: 7.5rem;

      display: flex;
      gap: 3.75rem;
      flex-direction: column;

      ${({ theme }) => theme.breakpoints.mobile} {
        gap: 1.25rem;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      h2 {
        margin-top: 3.75rem;
        font-size: 1.75rem;
        line-height: 2.06rem;
      }

      section {
        margin-bottom: 3.75rem;
        gap: 1.25rem;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      gap: 0;

      h2 {
        margin-bottom: 2.5rem;
      }
    }
  }
`;

export const VideoAbout = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  width: 50%;

  border-radius: 1.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;

    width: 100%;
  }
`;

export const VideoText = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  width: 100%;

  border-radius: 1.25rem;

  iframe {
    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;

    iframe {
      border-top-right-radius: 1.25rem;
    }
  }
`;

export const TextVideo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  width: 100%;

  border-radius: 1.25rem;

  iframe {
    background-color: ${({ theme }) => theme.colors.blue600};
    width: 50%;

    border-radius: 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column-reverse;

    iframe {
      width: 100%;
    }
  }
`;

export const TextSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  width: 50%;
  height: 18rem;
  padding: 2.625rem 3.75rem;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  span {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-size: 1.5rem;
    line-height: 2.125rem;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    height: 100%;

    padding: 1.25rem;

    span {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
`;
