"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import {
  Avatar,
  Dropdown,
  Layout,
  Menu,
  theme,
  Button,
  Divider,
  Badge,
} from "antd";

import { sidebarMenu } from "@/helpers/data/layout";

import * as S from "./AppLayout.styles";

const { Content, Sider } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: <p>Log out</p>,
    },
    {
      key: "2",
      label: <p>Profile</p>,
    },
    {
      key: "3",
      label: <p>Change password</p>,
    },
  ];

  const data = [
    {
      title: "Nguyen Van A",
    },
    {
      title: "Tran Van B",
    },
    {
      title: "Hoang Nam Quang C",
    },
    {
      title: "Vo Thi Thuy D",
    },
    {
      title: "Nguyen Van A",
    },
    {
      title: "Tran Van B",
    },
    {
      title: "Hoang Nam Quang C",
    },
    {
      title: "Vo Thi Thuy D",
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        // collapsible
        // collapsed={collapsed}
        style={{
          padding: 0,
          background: "#202342",
        }}
      >
        <S.ImageLogo>
          <Image
            className="dropdown-icon"
            src="/images/auth/logo.png"
            alt="dropdown"
            width={200}
            height={40}
          />
        </S.ImageLogo>
        <S.MenuStyled
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarMenu}
        />
        <Divider />
        <h3
          style={{
            padding: "0 12px",
            fontWeight: 500,
            marginBottom: 20,
            fontSize: 16,
            color: "#c6d6ff",
          }}
        >
          Gần đây
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                padding: "0 12px",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Badge dot>
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              </Badge>
              <p
                style={{
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "#fff",
                }}
              >
                {item.title}
              </p>
              <Badge count={25} />
            </div>
          ))}
        </div>
      </Sider>
      <Layout>
        <S.HeaderStyled
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <S.HeaderRight>
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <div className="wrap-options">
                <Avatar
                  src={
                    <Image
                      src={"/images/avatar/img1.png"}
                      alt="avatar"
                      priority={true}
                      width={16}
                      height={16}
                    ></Image>
                  }
                ></Avatar>
                <p className="user-name">Tran Van Bao Thang</p>
                <Image
                  className="dropdown-icon"
                  src="/icons/layout/dropdown.svg"
                  alt="dropdown"
                  width={8}
                  height={4}
                />
              </div>
            </Dropdown>
          </S.HeaderRight>
        </S.HeaderStyled>
        <Content
          style={{
            padding: "0 16px",
            // background: "#fff",
          }}
        ></Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
