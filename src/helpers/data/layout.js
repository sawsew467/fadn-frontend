import {
  SettingOutlined,
  HeartOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export const sidebarAppMenu = [
  {
    key: 0,
    icon: <HeartOutlined />,
    label: "Khám phá",
    href: "/app/",
  },
  {
    key: 1,
    icon: <MessageOutlined />,
    label: "Tin nhắn",
    href: "/app/messages",
  },
  {
    key: 2,
    icon: <SettingOutlined />,
    label: "Cài đặt",
    href: "/app/settings",
  },
];

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
  {
    key: "4",
    icon: <QuestionCircleOutlined />,
    label: "Quản lý câu hỏi",
  },
];



