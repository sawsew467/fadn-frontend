import styled from "styled-components";
import { Button, Flex } from "antd";

export const PlayerWrap = styled.div`
  position: relative;
  height: fit-content;
  background-color: #202124;
  border-radius: 12px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: fit-content !important;
  }

  & .react-player > div {
    width: 100% !important;
    height: auto !important;
    & > video {
      border-radius: 12px;
    }
  }
`;
export const MyCamera = styled.div`
  position: absolute;
  z-index: 2;
  top: 40px;
  right: 20px;
  width: 200px;
  height: 120px;
  border: 2px solid #fff;
  border-radius: 8px;
  background-color: #202124;
  & .react-player > div {
    width: auto !important;
    height: 100% !important;
    & > video {
      border-radius: 6px;
    }
  }
`;
export const EndCallButton = styled(Button)`
  position: absolute;
  bottom: 40px;
  right: 20px;
`;
export const Controller = styled(Flex)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
export const ControllItem = styled(Button)`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
