import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray200};

  display: flex;
  flex-direction: column;

  height: 100vh;

  ${Wrapper} {
    main {
      background: ${({ theme }) => theme.colors.white};
      border-radius: 4px;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05);
      color: ${({ theme }) => theme.colors.blue600};
      font-size: 1rem;
      
      display: flex;
      flex-direction: column;
      gap: 1rem;

      padding: 2rem;

      transform: translateY(-100px);

      h2 {
        font-size: 1.875rem;
        line-height: 2.1875rem;
      }

      a {
        background: ${({ theme }) => theme.colors.blue200};
        border-radius: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        font-weight: 500;

        align-self: flex-start;

        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        height: 2.5rem;
        padding: 0 2rem;
      }

      ul {
        list-style: square;

        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        padding-left: 1.25rem;
      }

      span {
        font-size: 0.875rem;
        font-style: italic;
        font-weight: 500;
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.blue500};

  display: flex;
  flex-direction: column;

  min-height: 30vh;

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    height: 100%;
    width: min(100%, 800px);

    position: relative;

    header {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      img {
        transform: translateY(-50px);
      }
    }
  }
`;
