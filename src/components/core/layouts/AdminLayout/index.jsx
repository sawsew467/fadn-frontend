"use client";

import Image from "next/image";
import { Avatar, Layout, Dropdown, Badge } from "antd";
import { useRouter } from "next/navigation";
import { BellOutlined } from "@ant-design/icons";

import { sidebarAdminMenu } from "@/helpers/data/layout";

import DropdownNotification from "../../common/DropdownNotification";
import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input } from "antd";
import * as S from "./AdminLayout.styles";
import Link from "next/link";


const { Content, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const handleLogout = () => {
    //
  };
  const items = [
    {
      key: "1",
      label: <p onClick={handleLogout}>Đăng xuất</p>,
    },
    {
      key: "2",
      label: (
        <p onClick={() => router.push("/admin/change-password")}>
          Đổi mật khẩu
        </p>
      ),
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
        style={{
          padding: 0,
          background: "#fff",
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
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarAdminMenu}
        />
      </Sider>

      <Layout>
        <S.Container>
          <S.SearchBox>
            <Flex gap="small" wrap="wrap">
              <Input placeholder="Search..." />
            </Flex>

          </S.SearchBox>
          <S.HeaderStyled
            style={{
              padding: 0,
              background: "#fff",
            }}
          >

            <S.HeaderRight>
              <Dropdown
                arrow={{ pointAtCenter: true }}
                trigger={["click"]}
                dropdownRender={() => <DropdownNotification />}
              >
                <Badge count={5}>
                  <BellOutlined style={{ fontSize: "24px", color: "#297fff" }} />
                </Badge>
              </Dropdown>
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
                trigger={["click"]}
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
        </S.Container>
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
export default AdminLayout;
