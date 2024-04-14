"use client";
import { useState } from "react";
import { Flex, Modal, Form, Input } from "antd";
import { useSearchParams } from "next/navigation";

import Button from "@/components/core/common/Button";
import FirstView from "../FirstView";
import MatchedView from "../MatchedView";
import RoomView from "../RoomView";
import { useAppDispatch } from "@/hooks/useRedux";
import { actionChangeUserInfo } from "@/store/features/auth/authSlice";

function Discovery() {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const roomId = searchParams.get("roomId");

  const dispatch = useAppDispatch();

  const renderContent = () => {
    if (matchId) {
      return <MatchedView></MatchedView>;
    }
    if (roomId) {
      return <RoomView></RoomView>;
    }
    return <FirstView></FirstView>;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:8088/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      localStorage.setItem("token", result?.token);

      const getMeResponse = await fetch(
        "http://localhost:8088/api/v1/auth/get-me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${result?.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const getMeResult = await getMeResponse.json();
      dispatch(actionChangeUserInfo(getMeResult));
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        {/* <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Login
        </Button> */}
        <Button type="primary">UPGRADE NOW!</Button>
      </Flex>
      <Flex justify="center" align="center" flex={1}>
        {renderContent()}
      </Flex>
      <Modal title="Login" open={isModalOpen} footer={[]} closeIcon={false}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Flex>
  );
}

export default Discovery;
