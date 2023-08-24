import styled, { css } from "styled-components";
import { ButtonProps } from ".";


export const ButtonContainer = styled.button<ButtonProps>`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.green600};
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.blue600};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  height: 2.5rem;
  padding: 0 2rem;

  transition: all 0.2s;

  ${({ size }) => size === 'full' && css`
    width: 100%;
  `}

  &:hover {
    filter: brightness(0.96);
  }
`;
