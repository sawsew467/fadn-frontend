import UserLayout from "@/components/core/layouts/UserLayout";

export default function VerifiedAccountLayout({ children }) {
  return (
    <>
      <UserLayout>{children}</UserLayout>
    </>
  );
}
