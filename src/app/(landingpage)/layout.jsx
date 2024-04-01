import React from "react";
import LandingLayout from "@/components/core/layouts/LandingLayout";

export default function RootLayout({ children }) {
  return (
    <>
      <LandingLayout>{children}</LandingLayout>
    </>
  );
}
