"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { useEffect, useState } from "react";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useState(""); // Sử dụng useState để có thể cập nhật giá trị TOKEN

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []); // Dependency array trống để chỉ chạy effect một lần sau khi render lần đầu tiên

  return (
    <>
      {/*========== Overlay ==========*/}
      <div className="overlay"></div>
      <a href="#" className="scrollToTop">
        <i className="fas fa-angle-up"></i>
      </a>
      {/*========== Overlay ==========*/}

      <header className="header-section header-active">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/pageImages/logo/logo.png"
                  alt="logo"
                  width="170"
                  height="38"
                />
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link
                  href="/"
                  className={`${pathname === "/" ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className={`${pathname === "/community" ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Cộng đồng
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className={`${pathname === "/membership" ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Thành viên trả phí
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${pathname === "/contact" ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Liên hệ
                </Link>
              </li>
              <li className="separator">
                <span>|</span>
              </li>
              <li className="user-profile">
                {/* <div className="joun-button">
                  <button className="btn custom-button">Join Now!</button>
                </div> */}

                <Image
                  src="/pageImages/user-demo.png"
                  alt="logo"
                  width="40"
                  height="40"
                  style={{ cursor: "pointer" }}
                />

                <ul className="submenu">
                  {token === "" ? (
                    <li>
                      <Link href="/login" style={{ textDecoration: "none" }}>
                        Đăng nhập
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Link
                          href="/profile"
                          style={{ textDecoration: "none" }}
                        >
                          Tài khoản
                        </Link>
                      </li>
                      <li>
                        <a
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("email");
                            localStorage.removeItem("userId");
                            router.push("/");
                          }}
                        >
                          Đăng xuất
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
