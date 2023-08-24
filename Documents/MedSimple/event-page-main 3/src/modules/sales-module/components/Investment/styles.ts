import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const InvestimentContainer = styled.div`
  background-image: url("images/imagesSalesModule/bgInvestiment.png");

  ${Wrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.125rem;

    max-width: 30rem;
    width: 100%;

    padding-bottom: 7.5rem;

    h2 {
      color: ${({ theme }) => theme.colors.yellow500};
      font-size: 2rem;
      line-height: 2.812rem;
      font-weight: 800;

      margin-top: 7.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.875rem;
      line-height: 1.375rem;

      text-align: center;

      > strong {
        font-weight: 600;
      }
    }

    .carousel .control-dots {
      top: -10.5%;

      position: relative;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      padding-bottom: 5rem;

      h2 {
        margin-top: 5rem;
      }
    }
  }
`;

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;

  margin-top: 0.9rem;

  small {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
    font-size: 5.62rem;
    line-height: 5.62rem;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    small {
      font-size: 1.125rem;
      line-height: 1.125rem;
    }

    strong {
      font-size: 4.375rem;
      line-height: 4.375rem;
    }
    span {
      font-size: 1.125rem;
      line-height: 1.125rem;
    }
  }
`;

export const SubscribeButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`;
