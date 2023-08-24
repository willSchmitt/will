import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const PlansPerpetuoContainer = styled.div`
  background-image: url(/images/imagesPerpetuo/bgPlans.png);

  position: relative;
  top: -5rem;

  ${Wrapper} {
    padding-bottom: 7.5rem;
    padding-top: 7.5rem;

    display: flex;
    gap: 6.5rem;
    flex-direction: column;

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.125rem;

      small {
        color: ${({ theme }) => theme.colors.white};

        font-family: "Albert Sans", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.125rem;
      }
      p {
        color: ${({ theme }) => theme.colors.white};

        font-family: "Albert Sans", sans-serif;
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.375rem;

        text-align: center;
      }
    }
  }
`;

export const TypePlans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;
