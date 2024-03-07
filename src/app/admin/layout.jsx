import AdminLayout from "@/components/core/layouts/AdminLayout";

export const metadata = {
  title: "Trang quản trị",
  description: "...",
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}
