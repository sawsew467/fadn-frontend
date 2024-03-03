"use client";

import { Flex } from "antd";
import { useSearchParams } from "next/navigation";

import Button from "@/components/core/common/Button";
import FirstView from "../FirstView";
import MatchedView from "../MatchedView";
import RoomView from "../RoomView";

function Discovery() {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const roomId = searchParams.get("roomId");

  const renderContent = () => {
    if (matchId) {
      return <MatchedView></MatchedView>;
    }
    if (roomId) {
      return <RoomView></RoomView>;
    }
    return <FirstView></FirstView>;
  };
  return (
    <Flex
      gap="middle"
      vertical
      style={{
        height: "100%",
      }}
    >
      <Flex justify="space-between" align="end">
        <p style={{ fontSize: 16 }}>Bạn đã sử dụng 5/10 lượt hôm nay!</p>
        <Button type="primary">UPGRADE NOW!</Button>
      </Flex>
      <Flex justify="center" align="center" flex={1}>
        {renderContent()}
      </Flex>
    </Flex>
  );
}

export default Discovery;
