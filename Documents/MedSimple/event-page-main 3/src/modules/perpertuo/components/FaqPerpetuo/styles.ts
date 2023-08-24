import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const FaqPerpetuoContainer = styled.div`
  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 6.25rem;

    padding-top: 1.25rem;
    padding-bottom: 6.25rem;

    h2 {
      color: ${({ theme }) => theme.colors.blue450};
      font-family: "Albert Sans", sans-serif;
      font-size: 2rem;
      font-weight: 800;
      line-height: 2.375rem;

      margin-bottom: 2.5rem;
    }
  }
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;

  h3 {
    color: ${({ theme }) => theme.colors.blue450};
    font-family: "Albert Sans", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.375rem;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.687rem;

    text-align: center;

    width: 75%;

    strong {
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
    }
  }
`;

export const ButtonHelp = styled.button`
  background-color: ${({ theme }) => theme.colors.green500};
  border-radius: 6.25rem;
  padding: 1.25rem 3.75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 0.625rem;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Albert Sans", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.125rem;

    text-align: center;
  }

  &:hover {
    filter: brightness(1.1);
    transition: 0.4s;
  }
`;
