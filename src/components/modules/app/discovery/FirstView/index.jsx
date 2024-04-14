"use client";

import { Flex, Select, InputNumber, Card, Tooltip } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/core/common/Button";

import * as S from "./FirstView.styles";
import { database } from "@/app/firebaseConfig";
import { onValue, ref, remove, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { actionChangeRoomId } from "@/store/features/room/roomSlice";
import { useAppSelector } from "@/hooks/useRedux";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import ProfileModal from "@/components/core/common/ProfileModal";

function FirstView() {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { userInfo } = useAppSelector((state) => state?.auth);
  console.log(userInfo);
  const handleMatch = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8088/api/v1/take-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(filter),
      });
      console.log("response:", response);
      const result = await response.json();
      console.log("result:", result);

      if (result?.roomId) {
        set(ref(database, "rooms/" + result?.participantId), result);
        dispatch(actionChangeRoomId(result?.roomId));
        router.push(
          `?matchId=${result?.roomId}&participantId=${result?.participantId}`
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  onValue(ref(database, "rooms/"), (snapshot) => {
    const data = snapshot.val();
    for (const key in data) {
      const object = data[key];
      console.log("object: ", object);
      console.log("userInfo: ", userInfo);
      if (userInfo?.id == object?.participantId) {
        console.log("object?.userId: ", "rooms/" + object?.participantId);
        remove(ref(database, "rooms/" + object?.participantId));
        remove(ref(database, "users/" + object?.participantId));

        router.push(
          `?matchId=${object?.roomId}&participantId=${object?.userId}`
        );
      }
    }
  });

  useEffect(() => {
    remove(ref(database, "users/" + userInfo?.id));
  }, [userInfo?.id]);

  const [filter, setFilter] = useState({
    genderId: 1,
    minAge: 18,
    maxAge: 27,
  });

  const handleChange = (value) => {
    setFilter((prev) => ({
      ...prev,
      genderId: value,
    }));
  };

  const onChangeMin = (value) => {
    setFilter((prev) => ({
      ...prev,
      minAge: value,
    }));
  };

  const onChangeMax = (value) => {
    setFilter((prev) => ({
      ...prev,
      maxAge: value,
    }));
  };

  const handleCancel = () => {
    setIsLoading(false);
    remove(ref(database, "users/" + userInfo?.id));
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
        <Flex gap={8} align="center">
          <Tooltip title="Dừng tìm kiếm">
            <Button
              shape="circle"
              icon={<CloseOutlined />}
              onClick={handleCancel}
              disabled={!isLoading}
            ></Button>
          </Tooltip>
          <Button type="primary" onClick={handleMatch} loading={isLoading}>
            {isLoading ? "ĐANG GHÉP CẶP" : "GHÉP CẶP NGAY"}
          </Button>
          <Tooltip title="Xem hồ sơ của bạn">
            <Button
              shape="circle"
              icon={<UserOutlined />}
              onClick={() => setIsShowProfile(true)}
            ></Button>
          </Tooltip>
        </Flex>

        <Flex gap={20}>
          <Flex vertical gap={8}>
            <p>Giới tính:</p>
            <Select
              disabled={isLoading}
              defaultValue="1"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "1", label: "Nam" },
                { value: "2", label: "Nữ" },
                { value: "3", label: "LGBT" },
              ]}
            />
          </Flex>
          <Flex vertical gap={8}>
            <p>Từ:</p>
            <InputNumber
              disabled={isLoading}
              min={18}
              defaultValue={18}
              onChange={onChangeMin}
            />
          </Flex>
          <Flex vertical gap={8}>
            <p>Đến:</p>
            <InputNumber
              disabled={isLoading}
              min={18}
              defaultValue={27}
              onChange={onChangeMax}
            />
          </Flex>
        </Flex>
      </Flex>
      <ProfileModal
        visible={isShowProfile}
        setIsShowProfile={setIsShowProfile}
        userInfo={userInfo}
      />
    </>
  );
}

export default FirstView;
