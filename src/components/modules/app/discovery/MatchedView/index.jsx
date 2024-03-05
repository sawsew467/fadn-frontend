"use client";

import { useState } from "react";
import { Flex } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import Card from "./Card";
import Button from "@/components/core/common/Button";

import { authToken, createMeeting } from "@/libs/react-video/api";
import { useAppDispatch } from "@/hooks/useRedux";

import * as S from "./MatchedView.styles";
import { actionChangeMeetingId } from "@/store/features/app/appSlice";

function MatchedView() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleReady = async () => {
    const meetingId = `bcxo-sapw-utk0`;
    dispatch(actionChangeMeetingId(meetingId));

    setIsLoading(true);
    setTimeout(() => {
      // const roomId = "room1234";
      router.push(`?roomId=${meetingId}`);
    }, 5000);
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
