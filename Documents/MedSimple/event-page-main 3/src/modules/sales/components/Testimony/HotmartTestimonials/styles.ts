import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4rem;
  
  width: 100%;

  .carousel-root {
    width: 100%;
  }


  ${({ theme }) => theme.breakpoints.mobile} {

    img {
      width: 1.25rem;
      height: 2.5rem;
    }
  }
`;

export const IndicatorButton = styled.button<{ isSelected: boolean }>`
  background: ${({ theme }) => theme.colors.blue600}20;
  height: 2px;
  width: 1.5rem;

  & + button {
    margin-left: 0.875rem;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme.colors.blue500};
    `}
`;
