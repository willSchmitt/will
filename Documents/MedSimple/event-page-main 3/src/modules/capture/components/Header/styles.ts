import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const HeaderCaptureContainer = styled.div`
  background-image: url("/images/bgCapture.png");

  ${Wrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 3.75rem;

    padding: 5rem 2rem;

    main {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      width: 100%;

      h3 {
        color: ${({ theme }) => theme.colors.white};
        font-family: "Albert Sans", sans-serif;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.812rem;
      }

      section {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        h1 {
          color: ${({ theme }) => theme.colors.yellow500};
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: 3.75rem;
          line-height: 4.5rem;
        }

        p {
          color: ${({ theme }) => theme.colors.white};
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }

      button {
        max-width: 18.9rem;
        width: 100%;
      }
    }

    picture {
      img {
        object-fit: contain;
        width: 170%;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      flex-direction: column;

      padding: 4rem 2rem;
      main {
        h3 {
          font-size: 1.75rem;
          line-height: 2.5rem;
        }
        section {
          h1 {
            font-size: 2.5rem;
            line-height: 3rem;
          }
        }

        button {
          max-width: 48rem;
          width: 100%;
        }
      }

      picture {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100vw;
          margin-left: 50%;
        }
      }
    }
  }
`;
