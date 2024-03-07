import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    cursor: pointer;
  }
  .bell-icon {
    cursor: pointer;
  }

  .wrap-options {
    margin-right: 16px;
    cursor: pointer;
    border: 2px solid #297fff;
    border-radius: 24px;
    height: 40px;
    overflow: hidden;
    padding: 4px;
    padding-left: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;

    color: #000000;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;

    .ant-avatar {
      margin-right: 4px;

      img {
        object-fit: cover;
      }
    }

    .user-name {
      max-width: 130px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .dropdown-icon {
      width: 16px;
      height: 8px;
      margin-left: 8px;
      margin-right: 10px;
    }
  }
`;

export const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: flex-end;
`;
export const ImageLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  & > img {
    width: 80%;
    height: auto;
    object-fit: cover;
  }
`;

export const MenuStyled = styled(Menu)``;
