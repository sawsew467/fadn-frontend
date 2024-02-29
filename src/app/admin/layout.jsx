import AdminLayout from "@/components/core/layouts/AdminLayout";

export default function RootAdminLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}
