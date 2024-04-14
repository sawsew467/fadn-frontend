"use client";
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
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Side() {
  const pathname = usePathname();
  const [openPanel, setOpenPanel] = useState("collapseOne");
  const panelPaths = [
    ["profile", "notifications", "friend-requests"],
    [
      "change-password",
      "delete-account",
      "privacy-settings",
      "verified-account",
    ],
    ["upgrade-account", "purchase-history"],
  ];
  const panelNumbers = ["One", "Two", "Three"];

  useEffect(() => {
    const currentPanel = panelPaths.findIndex((paths) =>
      paths.includes(pathname.slice(1))
    );
    if (currentPanel !== -1) {
      setOpenPanel(`collapse${panelNumbers[currentPanel]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const collapseItems = document.querySelectorAll(".accordion .collapse");

    collapseItems.forEach((item) => {
      if (item.id === openPanel) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  }, [openPanel]);

  const handleTogglePanel = (panelId) => {
    setOpenPanel(panelId === openPanel ? null : panelId);
  };

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <button
              className=""
              data-toggle={openPanel === "collapseOne" ? "collapse" : ""}
              data-target="#collapseOne"
              onClick={() => handleTogglePanel("collapseOne")}
              aria-expanded={openPanel === "collapseOne" ? "true" : "false"}
              aria-controls="collapseOne"
            >
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
              <span>Thông tin của tôi</span>
              <div className="t-icon">
                <i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </div>
            </button>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul className="links">
                <li>
                  <Link
                    className={`${pathname === "/profile" ? "active" : ""}`}
                    href="/profile"
                    style={{ textDecoration: "none" }}
                  >
                    Thông tin cá nhân
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/notifications" ? "active" : ""
                    }`}
                    href="/notifications"
                    style={{ textDecoration: "none" }}
                  >
                    Thông báo
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/friend-requests" ? "active" : ""
                    }`}
                    href="/friend-requests"
                    style={{ textDecoration: "none" }}
                  >
                    Yêu cầu kết bạn
                  </Link>
                </li>
                {/* <li>
                          <a href="user-badges.html">Badges</a>
                        </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <button
              className="collapsed"
              type="button"
              data-toggle={openPanel === "collapseTwo" ? "collapse" : ""}
              data-target="#collapseTwo"
              onClick={() => handleTogglePanel("collapseTwo")}
              aria-expanded={openPanel === "collapseTwo" ? "true" : "false"}
              aria-controls="collapseTwo"
            >
              <div className="icon">
                <i className="fas fa-cogs"></i>
              </div>
              <span>Cài đặt tài khoản</span>
              <div className="t-icon">
                <i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </div>
            </button>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul className="links">
                {/* <li>
                          <a href="user-account-info.html">Account Info</a>
                        </li> */}
                <li>
                  <Link
                    className={`${
                      pathname === "/change-password" ? "active" : ""
                    }`}
                    href="/change-password"
                    style={{ textDecoration: "none" }}
                  >
                    Thay đổi mật khẩu
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/privacy-settings" ? "active" : ""
                    }`}
                    href="/privacy-settings"
                    style={{ textDecoration: "none" }}
                  >
                    Cài đặt quyền riêng tư
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/verified-account" ? "active" : ""
                    }`}
                    href="/verified-account"
                    style={{ textDecoration: "none" }}
                  >
                    Tài khoản đã xác minh
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/delete-account" ? "active" : ""
                    }`}
                    href="/delete-account"
                    style={{ textDecoration: "none" }}
                  >
                    Xóa tài khoản
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <button
              className="collapsed"
              type="button"
              data-toggle={openPanel === "collapseThree" ? "collapse" : ""}
              data-target="#collapseThree"
              onClick={() => handleTogglePanel("collapseThree")}
              aria-expanded={openPanel === "collapseThree" ? "true" : "false"}
              aria-controls="collapseThree"
            >
              <div className="icon">
                <i className="far fa-credit-card"></i>
              </div>
              <span>Thanh toán</span>
              <div className="t-icon">
                <i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </div>
            </button>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul className="links">
                {/* <li>
                          <a href="user-billing.html">Billing & Payout</a>
                        </li> */}
                <li>
                  <Link
                    className={`${
                      pathname === "/upgrade-account" ? "active" : ""
                    }`}
                    href="/upgrade-account"
                    style={{ textDecoration: "none" }}
                  >
                    Nâng cấp tài khoản
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/purchase-history" ? "active" : ""
                    }`}
                    href="/purchase-history"
                    style={{ textDecoration: "none" }}
                  >
                    Gói đăng kí & Lịch sử mua hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
