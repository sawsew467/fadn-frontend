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

export default function UserDetailsLayout({ children }) {
    const router = useRouter();

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
              <div className="col-xl-8 col-md-7">
                {/* User Details */}
              </div>
              <div className="col-xl-4 col-md-5 ">{children}</div>
            </div>
          </div>
        </section>
        {/* <main>{children}</main> */}
      </>
    );
}
