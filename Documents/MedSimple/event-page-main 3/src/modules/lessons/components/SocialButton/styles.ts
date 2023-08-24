import styled from "styled-components";


export const SocialContainer = styled.div`
  background: ${({ theme }) => theme.colors.blue200};
  border-radius: 100px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  height: 100%;
  padding: 0.75rem;
  width: 45%;

  transition: all 0.2s;

  picture {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 1.5rem;
    color: ${({ theme }) => theme.colors.blue200};

    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.5rem;
    width: 1.5rem;
  }

  span {
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

export const Container = styled.a`
  background: ${({ theme }) => theme.colors.blue550};
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 3rem;
  padding-left: 1.5rem;

  transition: all 0.2s;
  width: 100%;

  &:hover {
    ${SocialContainer} {
      filter: brightness(1.2);
    }
  }
  
`;