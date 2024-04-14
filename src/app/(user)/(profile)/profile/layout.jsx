import UserLayout from "@/components/core/layouts/UserLayout";

export default function ProfileLayout({ children }) {
  return (
    <>
      <UserLayout>{children}</UserLayout>
    </>
  );
}
