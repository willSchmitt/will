import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  ${Wrapper} {
    padding-top: 12.5rem;
    padding-bottom: 10rem;

    display: flex;
    align-items: center;
    gap: 14.75rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ${Wrapper} {
      gap: 5.5rem;

      padding-top: 6.5rem;
      padding-bottom: 7.5rem;
    }
  }
`;

export const VideoTestimony = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem 2rem;

  iframe {
    border-radius: 0.5rem;

    overflow: hidden;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > strong {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;

    margin-top: 1.25rem;
  }

  > small {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    opacity: 0.8;
  }

  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;

    > iframe {
      border: none;
      border-radius: 8px;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    strong {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    small {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
