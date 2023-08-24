import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const MethodsPerpetuoContainer = styled.main`
  background-image: url(/images/imagesPerpetuo/bgMethods.png);
  background-size: cover;
  background-repeat: no-repeat;

  top: -9rem;
  position: relative;
  border-top-right-radius: 12.125rem;

  padding-bottom: 6.25rem;

  ${Wrapper} {
    padding-top: 8.75rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h2 {
      color: ${({ theme }) => theme.colors.blue450};
      font-family: "Albert Sans", sans-serif;
      font-size: 2rem;
      font-weight: 800;
      line-height: 2.375rem;

      text-align: center;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      padding-top: 3.75rem;

      gap: 1.25rem;

      h2 {
        font-size: 1.75rem;
        line-height: 2.125rem;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;

export const Method = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h3 {
    color: ${({ theme }) => theme.colors.yellow500};
    font-family: "Albert Sans", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.375;
  }

  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Albert Sans", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Albert Sans", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.312;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 1.25rem;

    h3 {
      font-size: 1.75rem;
      line-height: 2.125rem;
    }

    h4 {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }

    p {
      font-size: 1.312rem;
      line-height: 1.125rem;
    }
  }
`;

export const MethodOne = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  border-radius: 2.5rem;

  display: flex;
  gap: 6.575rem;

  width: 100%;
  padding: 5.125rem 6.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const ColumnA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  header {
    position: relative;

    display: flex;
    align-items: center;

    .fire {
      position: absolute;
      right: 0;
      top: -3rem;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 0.625rem;

    section {
      display: flex;
      gap: 1rem;

      margin-top: 0.625rem;

      width: 120%;
      span {
        line-height: 1.5rem;
      }

      img {
        position: relative;
        bottom: -5rem;
      }
    }

    header {
      flex-direction: column;
      align-items: flex-start;

      > img {
        margin-bottom: -1rem;
        width: 10rem;
        height: 10rem;

        object-fit: contain;
      }

      > h3 {
        width: 70%;
        font-size: 2.5rem;
        line-height: 3rem;
      }

      .fire {
        right: 10%;
        top: 6.5rem;

        max-width: 5.625rem;
        max-height: 5.625rem;
      }
    }
  }
`;

export const ColumnB = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  position: relative;

  .arrow {
    position: absolute;
    top: 20%;
    left: -4rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    left: 5rem;

    .arrow {
      top: 25%;
      left: -5rem;
    }
  }
`;

export const VideoLessons = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 5rem;

  > picture {
    position: absolute;
    top: -3.5rem;

    background-color: ${({ theme }) => theme.colors.yellow500};
    padding: 1.25rem;
    border-radius: 1rem;
    transform: rotate(-12.47deg);

    max-width: 4.187rem;
    max-height: 3.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    > picture {
      right: 80%;
      top: -4rem;
    }

    section {
      h4 {
        font-size: 1.85rem;
        line-height: 2.5rem;
      }

      p {
        line-height: 1.5rem;
      }
    }
  }
`;

export const Stories = styled.div`
  position: relative;

  display: flex;

  > picture {
    position: absolute;
    left: -20%;
    top: 1rem;

    background-color: ${({ theme }) => theme.colors.yellow500};
    padding: 1.25rem;
    border-radius: 1rem;
    transform: rotate(-12.47deg);

    max-width: 4.187rem;
    max-height: 3.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    > picture {
      top: 3rem;
      left: -22%;

      transform: rotate(-17.79deg);
    }

    section {
      h4 {
        font-size: 1.85rem;
        line-height: 2.5rem;
      }

      p {
        line-height: 1.5rem;
      }
    }
  }
`;

export const MethodTwo = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  border-radius: 2.5rem;

  display: flex;
  gap: 0.6875rem;

  width: 100%;
  padding: 3.125rem 13.75rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    header {
      display: flex;
      align-items: center;
      gap: 0.625rem;

      picture {
        background-color: ${({ theme }) => theme.colors.blue450};
        max-width: 5.68rem;
        max-height: 5.5rem;

        padding: 0.625rem 0.875rem;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.25rem;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;

    padding: 2.5rem 1.25rem;
    gap: 1.25rem;

    img {
      margin: 0 auto;
    }

    main {
      p {
        line-height: 1.5rem;
      }

      header {
        flex-direction: column;
        align-items: flex-start;

        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const MethodThree = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  border-radius: 2.5rem;

  display: flex;

  width: 100%;
  padding: 3.125rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.yellow500};
  height: 25rem;

  margin-left: 2.625rem;
  margin-right: 2.625rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    header {
      display: flex;
      align-items: center;
      gap: 0.625rem;

      picture {
        background-color: ${({ theme }) => theme.colors.blue450};
        max-width: 5.68rem;
        max-height: 5.5rem;

        padding: 0.625rem 0.875rem;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.25rem;

        img {
          transform: rotate(1.44deg);
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    main {
      p {
        line-height: 1.5rem;
      }

      header {
        flex-direction: column;
        align-items: flex-start;

        picture {
          width: 8.68rem;
          height: 8.5rem;
        }

        h3 {
          font-size: 2.3rem;

          max-width: 80%;
        }
      }
    }
    img {
      margin: 0 auto;
    }
  }
`;

export const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  picture {
    background-color: ${({ theme }) => theme.colors.blue450};
    max-width: 4.56rem;
    max-height: 4.125rem;

    padding: 0.68rem 1.125rem;
    transform: rotate(-6.34deg);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.25rem;

    position: absolute;
    top: -2rem;
    left: 14rem;
  }
  header {
    position: relative;
    margin-top: 3.125rem;
  }
  h4 {
    width: 50%;
  }

  .gold {
    position: absolute;
    top: -3.5rem;
    left: 18rem;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    header {
      display: flex;
      flex-direction: column;

      .gold {
        position: relative;
        top: -8rem;
        left: -1rem;
      }

      h4 {
        font-size: 2rem;
        line-height: 2.5rem;
        width: 80%;

        margin-bottom: 0.312rem;

        margin-left: 8.5rem;
      }

      p {
        font-size: 1.5rem;
        line-height: 1.75rem;
        width: 80%;

        margin-bottom: 0.312rem;

        margin-left: 8.5rem;
      }

      picture {
        top: 0;
        left: 0;

        max-width: 7rem;
        max-height: 7rem;

        width: 100%;
        height: 100%;

        img {
          max-width: 3.75rem;
          max-height: 3.75rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export const Mallet = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  picture {
    position: relative;
    top: 0;
    right: 0;
    left: 0;

    transform: rotate(16.49deg);
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    top: -8rem;
    position: relative;

    h4 {
      font-size: 2rem;
      line-height: 2.5rem;
      width: 80%;

      margin-bottom: 0.312rem;
      margin-left: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.75rem;
      width: 80%;

      margin-bottom: 0.312rem;

      margin-left: 1.5rem;
    }

    picture {
      top: -3rem;
      left: 0;

      max-width: 6rem;
      max-height: 6rem;

      width: 100%;
      height: 100%;

      transform: rotate(-16.49deg);

      img {
        max-width: 3.75rem;
        max-height: 3.75rem;
        width: 100%;
        height: 100%;

        object-fit: contain;
      }
    }
  }
`;

export const SimpleCards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  picture {
    position: relative;
    top: 0;
    right: 0;
    left: 0;

    transform: rotate(-7.18deg);
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    position: relative;
    top: -6rem;

    margin-bottom: -3rem;
    h4 {
      font-size: 2rem;
      line-height: 2.5rem;
      width: 80%;

      margin-bottom: 0.312rem;
      margin-left: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.75rem;
      width: 80%;

      margin-bottom: 0.312rem;

      margin-left: 1.5rem;
    }

    picture {
      top: 1rem;
      left: 0;

      max-width: 7rem;
      max-height: 7rem;

      width: 100%;
      height: 100%;

      img {
        max-width: 3.75rem;
        max-height: 3.75rem;
        width: 100%;
        height: 100%;

        object-fit: contain;
      }
    }
  }
`;

export const MethodFourAndFive = styled.div`
  display: flex;
  gap: 2.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    width: 100%;

    gap: 1.25rem;
  }
`;

export const MethodFour = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  border-radius: 2.5rem;

  padding: 3.125rem;
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    header {
      display: flex;
      align-items: center;
      gap: 0.625rem;

      picture {
        background-color: ${({ theme }) => theme.colors.blue450};
        max-width: 5.68rem;
        max-height: 6rem;

        padding: 0.68rem 1.125rem;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.25rem;

        position: relative;

        img {
          transform: rotate(1.44deg);
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;

    main {
      p {
        line-height: 1.5rem;
      }
    }

    img:last-child {
      margin: 0 auto;
    }
  }
`;

export const MethodFive = styled.div`
  background-color: ${({ theme }) => theme.colors.blue600};
  border-radius: 2.5rem;

  padding: 3.125rem;
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    header {
      display: flex;
      align-items: center;
      gap: 0.625rem;

      picture {
        background-color: ${({ theme }) => theme.colors.blue450};
        max-width: 5.68rem;
        max-height: 6rem;

        padding: 0.68rem 1.125rem;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.25rem;

        position: relative;

        img {
          transform: rotate(1.44deg);
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    margin-bottom: -2rem;

    main {
      p {
        line-height: 1.5rem;
      }
    }

    img:last-child {
      margin: 0 auto;
    }
  }
`;
