"use client";
/* eslint-disable @next/next/no-img-element */

import "@/styles/css/bootstrap.min.css";
import "@/styles/css/main.css";
import "@/styles/css/dark.css";
import "@/styles/css/responsive.css";
import Link from "next/link";

function Login() {
  return (
    <>
      {/* ========== Login & Registation Section ========== */}
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <Link
                  href="/"
                  className="backto-home"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-chevron-left"></i> Quay về trang chủ
                </Link>
              </div>
              <div className="col-lg-7 ">
                <div className="logo">
                  <img src="/pageImages/logo/logo.png" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div
              className="image image-log"
              // background-image:url('/pageImages/reg.jpg')
              // background-image:url('/pageImages/log.jpg')
              style={{
                backgroundImage: "url('/pageImages/log.jpg')",
              }}
            ></div>
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="section-header inloginp">
                  <h2 className="title">Nơi hẹn hò cùng CUPID DATING</h2>
                </div>
                <div className="main-content inloginp">
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="">Địa chỉ email</label>
                      <input
                        type="email"
                        className="my-form-control"
                        placeholder="Địa chỉ email của bạn"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Mật khẩu</label>
                      <input
                        type="text"
                        className="my-form-control"
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <p className="f-pass">
                      <a
                        href="#"
                        style={{ textDecoration: "none", fontWeight: "bold" }}
                      >
                        Quên mật khẩu?
                      </a>
                    </p>
                    <div className="button-wrapper">
                      <button type="submit" className="custom-button">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="or">
                      <p>hoặc</p>
                    </div>
                    <div className="or-content">
                      <p>Tiếp tục với email của bạn</p>
                      <a
                        href="#"
                        className="or-btn"
                        style={{ textDecoration: "none" }}
                      >
                        <img src="/pageImages/google.png" alt="" /> Đăng nhập
                        bằng Google
                      </a>
                      <p className="or-signup" style={{ marginRight: "10px" }}>
                        Bạn không có tài khoản?{"  "}
                        <Link
                          href="/register"
                          style={{ textDecoration: "none" }}
                        >
                          Tới đây ngay!
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Login & Registation Section ========== */}
    </>
  );
}

export default Login;
