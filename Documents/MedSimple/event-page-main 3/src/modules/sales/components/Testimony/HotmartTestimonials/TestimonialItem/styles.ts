import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  blockquote {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.125rem;
    text-align: center;

    margin-bottom: 2.75rem;
    max-width: 80%;
  }

  strong {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Space Grotesk";
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;

    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    text-align: center;
    opacity: 0.8;

    margin-bottom: 5rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 2rem;


    blockquote {
      font-size: 1.875rem;
      line-height: 2.187rem;

      text-align: center;

      max-width: 100%;
    }

    strong {
      font-size: 1.5rem;
      line-height: 2rem;

      text-align: center;
    }

    span {
      font-size: 1rem;
      line-height: 1.5rem;

      text-align: center;
    }
  }
`;
