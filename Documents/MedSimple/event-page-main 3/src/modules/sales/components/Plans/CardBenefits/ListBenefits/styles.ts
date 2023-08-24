import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    color: ${({theme}) => theme.colors.white};
    font-size: 1.125;
    font-weight: 400;
    line-height: 1.625rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;
