import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  border-radius: 6.25rem 6.25rem 0rem 0rem;
  background-color: ${({ theme }) => theme.colors.gray200};
  top: -13rem;
  position: relative;

  ${Wrapper} {
    padding-top: 7.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    footer {
      margin-bottom: 7.25rem;
      margin-top: 9.75rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      position: relative;

      h3 {
        font-family: "Albert Sans", sans-serif;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 3.25rem;
        color: ${({ theme }) => theme.colors.blue450};

        text-align: center;

        max-width: 53rem;
      }

      > picture {
        background-color: ${({ theme }) => theme.colors.green500};
        border-radius: 0.625rem;

        transform: rotate(-10.37deg);

        padding: 0.7rem;
        position: absolute;
        right: 3%;
        top: -2rem;
      }
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      padding-top: 3.75rem;
      margin-top: 7rem;

      footer {
        margin-bottom: 0;

        h3 {
          font-size: 1.5rem;
          line-height: 2rem;

          width: 100%;
        }

        > picture {
          top: -5rem;
        }
      }
    }
  }

  ${({theme}) => theme.breakpoints.mobile} {
    margin-bottom: -6rem;
  }
`;

export const TextImageFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  transform: rotate(-1.8deg);

  small {
    background-color: ${({ theme }) => theme.colors.yellow500};
    border-radius: 0.625rem;
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.125rem;

    padding: 0.3125rem 0.625rem;

    img {
      background-color: none;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    transform: rotate(-1.3deg);
    width: 75%;
    position: relative;
    small {
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-align: center;

      padding: 0.625rem;
    }

    img {
      position: absolute;
      top: 3rem;
    }
  }
`;

export const HeaderDetails = styled.div`
  max-width: 41.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;

  strong {
    color: ${({ theme }) => theme.colors.blue450};
    font-family: "Albert Sans", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.375rem;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.blue600};
    font-family: "Albert Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.375rem;
    text-align: center;

    margin-bottom: 1.875rem;

    text-decoration: underline;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    strong {
      font-size: 1.75rem;
      line-height: 2.06rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`;

export const BoxDetails = styled.div`
  margin-top: 3.75rem;
  margin-bottom: 10rem;
  display: flex;
  gap: 2.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    gap: 1.25rem;

    margin-top: 1.25rem;
    margin-bottom: 5rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0.625rem;

  small {
    font-family: "Albert Sans", sans-serif;
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue600};
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    small {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    img {
      max-width: 1.875rem;
      max-height: 1.875rem;

      object-fit: contain;
    }
  }
`;

export const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue50};

  ${({ theme }) => theme.breakpoints.mobile} {
    /* display: none; */
  }
`;
