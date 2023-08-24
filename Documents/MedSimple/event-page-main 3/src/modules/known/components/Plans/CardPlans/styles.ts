import styled, { css } from "styled-components";

import { Button } from "@/components/Button";

export const Container = styled.div<{ isRecommended?: boolean }>`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.5rem;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  position: relative;

  ${({ isRecommended }) =>
    isRecommended &&
    css`
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    `}

  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

    span {
      ${({ theme }) => theme.colors.blue600} font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.625rem;

      text-align: right;

      opacity: 0.5;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      span {
        font-size: 1rem;
        line-height: 1.5rem;

        opacity: 0.5;
      }
    }
  }

  .plan {
    display: flex;
    flex-direction: column;

    h3 {
      color: ${({ theme }) => theme.colors.blue600};
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2rem;
    }

    small {
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.625rem;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      h3 {
        font-size: 1.5rem;
        line-height: 2rem;
      }
      small {
        font-size: 1rem;
        line-height: 1.625rem;
      }
    }
  }

  > main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: ${({ theme }) => theme.colors.blue600};
      font-weight: 400;
      font-size: 0.625rem;
      line-height: 1rem;

      text-align: center;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 0.625rem;
      line-height: 1rem;

      text-align: center;
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 2rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 2.5rem;
    padding: 2rem;

    &:nth-child(2) {
      margin-top: 2.5rem;
    }
  }
`;

export const Recommended = styled.span`
  background: ${({ theme }) => theme.colors.blue600};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.5rem;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -40px;
  left: 0;

  width: 100%;
  height: 40px;

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const PriceContainer = styled.div`
  margin-bottom: 3rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 2.5rem;
    display: flex;
  }
`;

export const InstallmentPrice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  small {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  strong {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;
  }

  span {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.5rem;
    align-self: flex-end;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 0.75rem;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export const ButtonCash = styled(Button)`
  font-size: 1rem;
  line-height: 1.375rem;
  text-align: center;

  height: 3.5rem;
  width: 100%;
`;

export const ButtonInstallment = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  text-align: center;

  height: 3.5rem;
  width: 100%;
`;
