"use client";

import Image from "next/image";
import { Avatar, Layout, Divider, Badge } from "antd";

import { sidebarAppMenu } from "@/helpers/data/layout";

import * as S from "./AppLayout.styles";
import { useAppDispatch } from "@/hooks/useRedux";
import { actionChangeUserInfo } from "@/store/features/auth/authSlice";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

const { Content, Sider } = Layout;

const AppLayout = ({ children }) => {
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

  const router = useRouter();

  const dispatch = useAppDispatch();

  const getMe = useCallback(async () => {
    try {
      const getMeResponse = await fetch(
        "http://localhost:8088/api/v1/auth/get-me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const getMeResult = await getMeResponse.json();

      console.log("getMeResult:", getMeResult);
      dispatch(actionChangeUserInfo(getMeResult));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        style={{
          padding: 0,
          background: "#202342",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px",
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
          defaultSelectedKeys={["0"]}
          mode="inline"
          items={sidebarAppMenu}
          onClick={(item) => router.push(sidebarAppMenu[item?.key]?.href)}
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
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${
                    index + 15
                  }`}
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
        {/* <S.HeaderStyled
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
        </S.HeaderStyled> */}
        <Content
          style={{
            padding: "32px",
            background: "#e1e5fe80",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
