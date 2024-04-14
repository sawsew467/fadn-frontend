import Button from "@/components/core/common/Button";
import ProfileModal from "@/components/core/common/ProfileModal";
import { useAppSelector } from "@/hooks/useRedux";
import { Flex, Tooltip } from "antd";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";

const CallBox = dynamic(
  () => import("@/components/modules/app/discovery/RoomView/CallBox/index"),
  {
    ssr: false,
  }
);

function RoomView() {
  const searchParams = useSearchParams();
  const participantId = searchParams.get("participantId");
  const [isShowProfile, setIsShowProfile] = useState(false);

  const [participantInfo, setParticipantInfo] = useState();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/v1/user/${participantId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response?.json();

      setParticipantInfo(data);
    } catch (error) {}
  }, [participantId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
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
          align="center"
        >
          <Flex gap={8} align="center">
            <Tooltip title="Xem hồ sơ">
              <Button
                shape="circle"
                icon={<UserOutlined />}
                onClick={() => setIsShowProfile(true)}
              ></Button>
            </Tooltip>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {`${participantInfo?.firstName} ${participantInfo?.lastName}`}
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
      <ProfileModal
        visible={isShowProfile}
        setIsShowProfile={setIsShowProfile}
        userInfo={participantInfo}
      />
    </>
  );
}

export default RoomView;
