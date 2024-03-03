import styled, { css } from "styled-components";

import { Button } from "antd";

export const ButtonCommon = styled(Button)`
  &.ant-btn-primary {
    background-image: linear-gradient(
      166deg,
      rgb(242, 40, 118) 0%,
      rgb(148, 45, 217) 100%
    );
    padding: 8px 32px;
    height: auto !important;
    border-radius: 50px;
  }
  &.ant-btn-primary:hover {
    background-image: linear-gradient(
      166deg,
      rgb(242, 40, 118) 0%,
      rgb(148, 45, 217) 100%
    ) !important;
  }
  &.ant-btn-primary:focus-visible {
    outline: 4px solid #942dd9;
  }
`;
