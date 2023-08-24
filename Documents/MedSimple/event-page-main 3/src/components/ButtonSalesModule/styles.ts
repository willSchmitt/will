import styled from "styled-components";

export const ButtonSalesModuleContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow500};
  border-radius: 62.5rem;

  color: ${({ theme }) => theme.colors.blue600};
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;

  padding: 1.25rem 3.75rem;

  max-width: 21rem;
  width: 100%;

  &:hover {
    filter: brightness(0.85);
    transition: filter 0.4s;
  }

  ${({theme}) => theme.breakpoints.mobile} {
    
  }
`;
