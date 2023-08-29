import styled from "styled-components";

export const ButtonPerpetuoContiner = styled.button`
  max-width: 40rem;

  padding: 1.25rem 3.75rem;
  background-color: ${({ theme }) => theme.colors.yellow500};

  border-radius: 62.5rem;

  small {
    font-family: "Albert Sans", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.blue600};
  }

  &:hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0.625rem 1.25rem;

    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`;
