import UserLayout from "@/components/core/layouts/UserLayout";
import { redirect } from "next/dist/server/api-utils";

export default async function ProfileLayout({ children }) {
  return (
    <>
      <UserLayout>{children}</UserLayout>
    </>
  );
}
