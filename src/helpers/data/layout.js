import { SettingOutlined, HeartOutlined, MessageOutlined, PieChartOutlined } from "@ant-design/icons";



export const sidebarAdminMenu = [

  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Thống kê",
    href: "/admin/",
  },
  {
    key: "2",
    icon: <MessageOutlined />,
    label: "Quản lý người dùng",
    href: "/admin/users"
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Quản lý cuộc gọi",
    href: "/admin/CallManagement"
  },
];



