import styled from "styled-components";

export const ButtonCapturePageContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow500};
  border-radius: 62.5rem;

  padding: 1.25rem 6.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.blue600};
  font-family: "Albert Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.68rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }
`;
