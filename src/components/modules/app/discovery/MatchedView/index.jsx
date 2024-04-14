"use client";

import { useState } from "react";
import { Flex } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";

import Card from "./Card";
import Button from "@/components/core/common/Button";

import { authToken, createMeeting } from "@/libs/react-video/api";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import * as S from "./MatchedView.styles";
import { actionChangeMeetingId } from "@/store/features/app/appSlice";

function MatchedView() {
  const searchParams = useSearchParams();
  const participantId = searchParams.get("participantId");
  const matchId = searchParams.get("matchId");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { userInfo } = useAppSelector((state) => state?.auth);

  const handleReady = async () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(`?roomId=${matchId}&participantId=${participantId}`);
    }, 1000);
  };

  return (
    <>
      <Flex
        justify="center"
        align="center"
        flex={1}
        gap={40}
        style={{
          height: "100%",
        }}
        vertical
      >
        <Flex align="center" gap={20}>
          <Card
            id={userInfo?.id}
            info={{
              name: "Bao Thang",
              age: 21,
              avatar: "/images/common/person 2.jpg",
            }}
          ></Card>
          <S.HeartWrap>
            <S.HeartButton justify="center" align="center">
              <HeartFilled />
            </S.HeartButton>
          </S.HeartWrap>
          <Card
            id={participantId}
            info={{
              name: "Thuy Suong",
              age: 20,
              avatar: "/images/common/person 1.jpg",
            }}
          ></Card>
        </Flex>
        <Flex vertical align="center" gap={8}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Đã kết nối đến đối phương thành công!
          </p>
          <Button type="primary" onClick={handleReady} loading={isLoading}>
            BẮT ĐẦU
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default MatchedView;
