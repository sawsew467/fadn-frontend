import UserLayout from "@/components/core/layouts/UserLayout";

export default function UserProfileLayout({ children }) {
  return (
    <>
      <UserLayout>{children}</UserLayout>
    </>
  );
}
