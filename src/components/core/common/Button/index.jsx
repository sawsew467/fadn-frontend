"use client";

import React from "react";

import * as S from "./Button.styles";

const Button = ({ children, ...props }) => {
  return <S.ButtonCommon {...props}>{children}</S.ButtonCommon>;
};

export default Button;
