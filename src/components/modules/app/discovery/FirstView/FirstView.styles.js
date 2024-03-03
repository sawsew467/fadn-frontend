import styled, { keyframes, css } from "styled-components";

import { Flex } from "antd";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const HeartButton = styled(Flex)`
  width: 100px !important;
  height: 100px !important;
  background: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px;
  position: relative;
  & .anticon {
    font-size: 60px !important;
    color: #f12876;
  }
`;

export const HeartWrap = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: #f12876;
    opacity: 0.5;
    animation: ${(props) =>
      props?.$isLoading
        ? css`
            ${pulseAnimation} 2s infinite
          `
        : ``};
  }
`;
