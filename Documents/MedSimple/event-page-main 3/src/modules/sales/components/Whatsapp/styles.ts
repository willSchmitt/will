import styled, { keyframes } from "styled-components";

const scaleIn = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from {  transform: scale(1); }
  to {  transform: scale(0.9); }
`;

export const Container = styled.a`
  background: ${({ theme }) => theme.colors.whatsapp};
  border-radius: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 3rem;
  padding-inline: 1.5rem;

  position: fixed;
  bottom: 2rem;
  right: 2rem;

  transition: all 0.1s;

  img {
    height: 1.25rem;
    width: 1.25rem;
  }

  outline: 2px solid transparent;
  outline-offset: 0;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.whatsapp};
    outline-offset: 3px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    box-sizing: border-box;

    height: 2.5rem;
    width: calc(100% - 4rem);
    margin: 0 2rem;

    right: unset;
    bottom: 0.875rem;
  }
`;
