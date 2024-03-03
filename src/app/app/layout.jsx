import AppLayout from "@/components/core/layouts/AppLayout";

export const metadata = {
  title: "Cupid Matcher",
  description: "...",
};

function AppRootLayout({ children }) {
  return <AppLayout>{children}</AppLayout>;
}

export default AppRootLayout;
