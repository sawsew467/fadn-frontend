import LandingLayout from "@/components/core/layouts/LandingLayout";

export const metadata = {
  title: "Trang giới thiệu",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <>
      <LandingLayout>{children}</LandingLayout>
    </>
  );
}
