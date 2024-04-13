import styled from "styled-components";
import { Flex } from "antd";

export const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  margin: 12px 0;

  border: 2px solid #000;
`;

export const SubInfo = styled(Flex)`
  width: 80%;
  font-size: 14px;
`;

export const Bio = styled.p`
  font-size: 16px;
  padding: 0 20px;
  text-align: center;
`;
