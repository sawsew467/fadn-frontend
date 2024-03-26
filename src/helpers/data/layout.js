import { SettingOutlined, HeartOutlined, MessageOutlined, PieChartFilled } from "@ant-design/icons";
import Link from "next/link";

export const sidebarAdminMenu = [
  {
    key: "1",
    icon: <PieChartFilled />,
    label: "Thống kê",
  },
  {
    key: "2",
    icon: <MessageOutlined />,
    label: "Quản lý người dùng",
    link: "/admin/users"
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Quản lý cuộc gọi",
    link: "/admin/CallManagement"
  },
];

