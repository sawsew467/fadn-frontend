import styled, { css } from "styled-components";

export const DropdownNotification = styled.div`
  width: 400px;
  height: 500px;
  overflow-y: scroll;
  background-color: #ffffff;
  padding: 20px 15px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.17);

  .wrap-empty {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NoteWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  background: #fff;
  padding: 10px;
  margin-bottom: 10px;

  border: 0.5px solid #c1c1c1;

  ${({ $status }) =>
    $status === "pending" &&
    css`
      border-left: 2px solid #297fff;
    `}

  .avatar-image {
    border-radius: 99px;
  }
`;

export const NoteContent = styled.div`
  .subtitle2 {
    span {
      font-weight: 500;
    }
  }
`;
