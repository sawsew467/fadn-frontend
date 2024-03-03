"use client";

import { Flex } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/core/common/Button";

import * as S from "./FirstView.styles";

function FirstView() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleMatch = () => {
    setIsLoading(true);
    setTimeout(() => {
      const matchId = 12345;
      router.push(`?matchId=${matchId}`);
    }, 5000);
  };

  return (
    <>
      <Flex
        justify="center"
        align="center"
        flex={1}
        vertical
        gap={20}
        style={{
          height: "100%",
        }}
      >
        <S.HeartWrap $isLoading={isLoading}>
          <S.HeartButton justify="center" align="center">
            <HeartFilled />
          </S.HeartButton>
        </S.HeartWrap>
        <Button type="primary" onClick={handleMatch} loading={isLoading}>
          GHÉP CẶP NGAY
        </Button>
      </Flex>
    </>
  );
}

export default FirstView;
