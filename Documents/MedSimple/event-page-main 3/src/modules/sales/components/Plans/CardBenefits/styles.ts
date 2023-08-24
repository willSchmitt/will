import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  ${Wrapper} {
    display: flex;
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: space-around;

    > h2 {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.375rem;

      width: 100%;
      max-width: 25%;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ${Wrapper} {
      flex-direction: column !important;
      gap: 2.5rem;

      padding: 0 1rem;

      h2 {
        max-width: 100%;
      }
    }
  }
`;
