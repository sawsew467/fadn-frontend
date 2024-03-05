import styled from "styled-components";

export const PlayerWrap = styled.div`
  & > div {
    width: auto !important;
    height: 100% !important;
    & > video {
      border-radius: 12px;
    }
  }
`;
