import styled, { css } from "styled-components";

type LessonProps = {
  isAvailable?: boolean;
  isActive?: boolean;
};

export const Container = styled.div<LessonProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.blue200};

  padding: 1.5rem 2rem;

  ${({ isAvailable, isActive }) => {
    if (isAvailable && isActive) {
      return css`
        background: ${({ theme }) => theme.colors.blue200};
      `;
    }

    if (!isAvailable && !isActive) {
      return css`
        background: ${({ theme }) => theme.colors.blue550};
      `;
    }
  }}

  > a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${({ theme }) => theme.colors.gray100};
        font-size: 0.75rem;
        line-height: 1.125rem;
      }
    }

    > main {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 3.125rem;

      strong {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.375rem;
      }

      span {
        color: ${({ theme }) => theme.colors.white};
        font-size: 0.625rem;
        font-weight: 500;
        line-height: 0.625rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  > footer {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const MobileContainer = styled.div<LessonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;

  border-top: 1px solid ${({ theme }) => theme.colors.blue100};

  padding: 1.5rem 1rem;

  ${({ isAvailable, isActive }) => {
    if (isAvailable && isActive) {
      return css`
        background: ${({ theme }) => theme.colors.blue200};
      `;
    }

    if (!isAvailable && !isActive) {
      return css`
        background: ${({ theme }) => theme.colors.blue550};
      `;
    }
  }}

  > strong {
    color: ${({ theme }) => theme.colors.gray200};
    font-size: 0.875rem;
    line-height: 0.875rem;
    text-align: center;
  }

  > span {
    color: ${({ theme }) => theme.colors.gray200};
    font-size: 0.625rem;
    line-height: 0.625rem;
    text-align: center;
  }

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    margin-top: 0.6rem;
  }
`;