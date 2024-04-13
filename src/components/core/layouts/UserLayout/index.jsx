"use client";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/magnific-popup.css";
import "@/styles/css/odometer.css";
import "@/styles/css/owl.carousel.min.css";
import "@/styles/css/owl.theme.default.min.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/main.css";
import "@/styles/css/responsive.css";
import "@/styles/css/dark.css";
import React, { useEffect } from "react";
import Header from "../LandingLayout/Header";
import BreadcrumbUser from "./BreadcrumbUser";
import Side from "./Side";

import { redirect, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useRedux";
import { selectToken } from "@/store/features/auth/tokenSlice";

function UserLayout({ children }) {
  const router = useRouter();
  const token = useAppSelector(selectToken);

  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   const token = localStorage.getItem("token");
  //   // Kiểm tra xem người dùng đã xác thực hay chưa
  //   if (token === null) {
  //     // Nếu chưa xác thực, chuyển hướng về trang đăng nhập
  //     console.log("TOKEN Ở ĐÂY");
  //   } else {
  //     redirect("/login");
  //   }
  // }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null || token === undefined || token.length === 0) {
      // Nếu chưa xác thực, chuyển hướng về trang đăng nhập
      // redirect("/login");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Header></Header>
      <BreadcrumbUser />
      <section className="user-setting-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-5">
              <Side />
            </div>
            <div className="col-xl-8 col-md-7 ">{children}</div>
          </div>
        </div>
      </section>
      {/* <main>{children}</main> */}
    </>
  );
}

export default UserLayout;
