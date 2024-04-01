"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function Header() {
  const pathname = usePathname();

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

                <Link href="/users">
                  <Image
                    src="/pageImages/user-demo.png"
                    alt="logo"
                    width="40"
                    height="40"
                  />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/profile" style={{ textDecoration: "none" }}>
                      Tài khoản
                    </Link>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Đăng xuất
                    </a>
                  </li>
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
