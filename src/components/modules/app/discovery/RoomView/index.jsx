import { Flex } from "antd";

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
      <div
        style={{
          flex: 1,
          background: "#fff",
          borderRadius: 12,
        }}
      ></div>
    </Flex>
  );
}

export default RoomView;
