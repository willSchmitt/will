import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const HeaderSalesModuleContainer = styled.div`
  background-image: url("/images/imagesSalesModule/bgHeader.png");

  ${Wrapper} {
    padding: 5.375rem 2.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: row;

    section {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;

      h1 {
        color: ${({ theme }) => theme.colors.yellow500};

        font-weight: 800;
        font-size: 2.5rem;
        line-height: 3rem;

        margin-top: 3.125rem;
      }

      small {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
      }

      button {
        margin-top: 1.875rem;
      }
    }

    picture {
      img {
        border: 10px solid ${({ theme }) => theme.colors.white};
        border-radius: 1.25rem;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      flex-direction: column;

      section {
        h1 {
          margin-top: 2.5rem;

          font-size: 2rem;
          line-height: 2.375rem;
        }
      }
      picture {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        img {
          width: 100%;
          object-fit: fill;
          border: 5px solid ${({ theme }) => theme.colors.white};
        }

        button {
          margin: 0 auto;
          max-width: 42.5rem;
          width: 100%;
        }
      }
    }
  }
`;
