import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const FooterCaptureContainer = styled.div`
  ${Wrapper} {
    border-top: 1px solid ${({ theme }) => theme.colors.blue50};

    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    small {
      color: ${({ theme }) => theme.colors.blue600};
      font-family: "Albert Sans", sans-serif;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.625rem;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      width: 95%;
    }
  }
`;
