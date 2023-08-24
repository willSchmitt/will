import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100vw;
  max-width: 112.5rem;
/* 
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export const ItemCarousel = styled.div`
  max-width: 21.25rem;
  width: 100%;

  max-height: 40rem;
  height: 100%;

  img {
    object-fit: cover;
  }

  /* ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
  } */
`;

export const InfoCarousel = styled.div`
  background: ${({ theme }) => theme.colors.black100};

  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1;
  padding: 1.25rem;

  height: 25vh;

  h3 {
    color: ${({ theme }) => theme.colors.yellow500};
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: start;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Albert Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: start;
  }

  /* ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
  } */
`;
