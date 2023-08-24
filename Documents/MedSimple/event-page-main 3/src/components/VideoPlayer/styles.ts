import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 56.25%;

  display: flex;
  flex: 1;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border: 0;
  }
`;
