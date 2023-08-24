import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 2rem;
  width: min(100%, 1200px);

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0 1rem;
  }
`;
