import { Wrapper } from "@/components/Wrapper";
import styled from "styled-components";

export const StudentsContainer = styled.div`
  background-image: url(/images/imagesPerpetuo/bgStudents.png);

  padding-top: 6.25rem;

  ${Wrapper} {
    display: flex;
    flex-direction: column;
    gap: 12.5rem;

    ${({ theme }) => theme.breakpoints.mobile} {
      padding-top: 2rem;
    }
  }
`;

export const Plataform = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.75rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    h3 {
      color: ${({ theme }) => theme.colors.blue450};

      font-family: "Albert Sans", sans-serif;
      font-size: 2rem;
      font-weight: 800;
      line-height: 2.75rem;
    }

    p {
      color: ${({ theme }) => theme.colors.blue600};

      font-family: "Albert Sans", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
    }

    img {
      margin-top: 3.125rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.blue600};

      font-family: "Albert Sans", sans-serif;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.68rem;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    gap: 3.75rem;

    section {
      h3 {
        font-size: 2.2rem;
        line-height: 2.8rem;
      }

      p {
        font-size: 1.2rem;
      }

      img {
        margin-top: 1.875rem;
      }
    }

    img:last-child {
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const Table = styled.div`
  margin-bottom: 15.75rem;

  display: flex;
  flex-direction: column;
  gap: 2.315rem;
  align-items: center;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.colors.white};

    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;

    tr {
      th {
        height: 4rem;

        background-color: ${({ theme }) => theme.colors.blue450};
        color: ${({ theme }) => theme.colors.white};
        font-family: "Albert Sans", sans-serif;
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 600;
        text-align: center;

        padding: 0.5rem;
      }

      td {
        padding: 1.25rem;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 30rem;
  }
`;

export const WithoutMEDsimple = styled.div`
  tr {
    th {
      border-top-right-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const WithMEDsimple = styled.div`
  tr {
    th {
      border-top-left-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const AllTables = styled.div`
  display: flex;
`;

export const Tables = styled.div`
  position: relative;

  table:first-child {
    border-bottom-left-radius: 1.25rem;
    tr {
      th {
        border-top-left-radius: 1.25rem;
      }
    }
  }

  table:last-child {
    border-bottom-right-radius: 1.25rem;
    tr {
      th {
        border-top-right-radius: 1.25rem;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    position: relative;

    table {
      border-top-right-radius: 1.25rem;
      border-bottom-right-radius: 1.25rem;
      border-top-left-radius: 1.25rem;
      border-bottom-left-radius: 1.25rem;
    }

    table:first-child {
      tr {
        th {
          border-top-right-radius: 1.25rem;
        }
      }
    }
  }

  table:last-child {
    position: absolute;
    top: 24.5rem;

    tr {
      th {
        border-top-left-radius: 1.25rem;
      }
    }
  }
`;
