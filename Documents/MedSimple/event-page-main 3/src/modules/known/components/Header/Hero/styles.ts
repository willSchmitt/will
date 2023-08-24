import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  ${Wrapper} {
    display: flex;
    flex-direction: row;
    gap: 5.625rem;
    justify-content: space-between;

    ${({ theme }) => theme.breakpoints.mobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    ${Wrapper} {
      flex-direction: column;
      gap: 4rem;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ${Wrapper} {
      flex-direction: column-reverse;
      gap: 3rem;

      padding: 0;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.125rem;
    letter-spacing: -2%;

    color: ${({ theme }) => theme.colors.white};
  }

  span {
    display: flex;
    gap: 3.2rem;
    align-items: center;

    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;

    color: ${({ theme }) => theme.colors.gray100};

    margin-bottom: 0.5rem;
  }

  button {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.375rem;

    align-self: flex-start;

    padding: 0 3rem;
    height: 3.5rem;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    h1 {
      text-align: center;

      margin: 0 auto;
      max-width: 80%;
    }

    span {
      text-align: center;

      align-items: center;
      justify-content: center;

      margin: 0 auto;
    }

    button {
      align-self: center;
      margin: 0 auto;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 0 auto;
    width: 100%;

    padding: 0 2rem;

    h1 {
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 2.875rem;
      text-align: center;

      width: 100%;

      margin: 0 auto;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: left;

      align-items: flex-start;
      gap: 1.5rem;

      width: 100%;
      margin: 0 auto;
    }

    button {
      margin: 0 auto;
    }
  }
`;

export const VideoContainer = styled.div`
  border-radius: 0.5rem;

  display: flex;
  flex: 1;

  min-width: 60%;
  width: 100%;

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    border-radius: 0;
  }
`;
