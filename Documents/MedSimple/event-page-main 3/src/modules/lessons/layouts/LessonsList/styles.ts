import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  a.disabled {
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    a + a {
      border-left: 1px solid ${({ theme }) => theme.colors.blue100};
    }
  }
`;
