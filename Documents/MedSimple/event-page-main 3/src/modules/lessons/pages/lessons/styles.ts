import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;

  > main {
    background: ${({ theme }) => theme.colors.white};

    overflow: auto;
    height: 100vh;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 3rem auto 2rem;
  padding: 0 1rem;
  width: min(100%, 75%);

  article {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray350};

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding-bottom: 2.5rem;

    h1 {
      color: ${({ theme }) => theme.colors.blue600};
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 2.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.blue600};
      font-size: 1rem;
      line-height: 1.375rem;
    }

    ul {
      color: ${({ theme }) => theme.colors.blue600};
      font-size: 1rem;
      line-height: 1.375rem;

      list-style: disc;
      padding-left: 1.25rem;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.blue600};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.875rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 2rem auto 2rem;
    padding: 0 0 7rem;
    width: 100%;

    article {
      padding: 0 1.5rem;
      border-bottom: 0;
    }
  }
`;

export const SocialContainer = styled.div`
  background: ${({ theme }) => theme.colors.blue500};
  
  display: none;

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
  }
`;

export const TabBarContainer = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.mobile} {
    background: ${({ theme }) => theme.colors.blue500};
    display: flex;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
`;
