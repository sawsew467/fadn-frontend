import { Flex } from "antd";
import dynamic from "next/dynamic";

const CallBox = dynamic(
  () => import("@/components/modules/app/discovery/RoomView/CallBox/index"),
  {
    ssr: false,
  }
);

function RoomView() {
  return (
    <Flex
      vertical
      flex={1}
      style={{
        height: "100%",
      }}
      gap={12}
    >
      <Flex
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: 12,
        }}
        justify="space-between"
      >
        <Flex>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Vo Thi Thuy Suong
          </p>
        </Flex>
        <p
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#ff4848",
          }}
        >
          00:09:32
        </p>
      </Flex>
      <CallBox></CallBox>
    </Flex>
  );
}

export default RoomView;
