import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 12.5rem;
  padding-bottom: 9.5rem;

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: min(100%, 800px);
  }

  h2 {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.125rem;
  }

  .line {
    height: 0.0625rem;
    background: ${({ theme }) => theme.colors.gray300};
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: 7.5rem;
    padding-bottom: 3rem;

    ${Wrapper} {
      gap: 3rem;
      
      padding: 0 1.5rem;

      h2 {
        font-size: 1.875rem;
        line-height: 2.187rem;

        text-align: left;
      }
    }
  }
`;
