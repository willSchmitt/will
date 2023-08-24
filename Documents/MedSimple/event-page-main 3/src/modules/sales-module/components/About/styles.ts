import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const AboutSalesModuleContainer = styled.div`
  background-image: url("/images/imagesSalesModule/bgAboutSalesModule.png");

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 7.5rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      h2 {
        color: ${({ theme }) => theme.colors.blue450};
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.812rem;
      }
      p {
        color: ${({ theme }) => theme.colors.blue600};
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      small {
        color: ${({ theme }) => theme.colors.blue600};
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      gap: 2.5rem;

      section {
        h2 {
          font-size: 1.75rem;
          line-height: 2.5rem;
        }
      }
    }
  }
`;

export const ImageText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;

  margin-top: 5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    img {
      width: 100%;
      object-fit: fill;
    }
  }
`;

export const TextImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;

  margin-bottom: 7.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    margin-bottom: 3.75rem;

    img {
      width: 100%;
      object-fit: fill;
    }
  }
`;
