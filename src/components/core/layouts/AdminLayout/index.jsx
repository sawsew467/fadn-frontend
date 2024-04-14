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




const { Content, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const handleLogout = () => {
    //
  };
  const handleItemClick = (item) => {
    router.push(item?.href);
  }
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

          onClick={(e) => {
            sidebarAdminMenu.map((item) => {
              if (item.key == e.key) {
                // console.log(e)
                // console.log(item?.href)
                router.push(item?.href)
              }
            })
          }}
        />
      </Sider>

      <Layout>
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
