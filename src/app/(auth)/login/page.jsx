"use client";
/* eslint-disable @next/next/no-img-element */

import "@/styles/css/bootstrap.min.css";
import "@/styles/css/main.css";
import "@/styles/css/dark.css";
import "@/styles/css/responsive.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { Button, message, Space, Spin } from "antd";

function Login() {
  const [userGoogleData, setUserGoogleData] = useState(null);
  const [redirected, setRedirected] = useState(false);
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [spinning, setSpinning] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const error = (message) => {
    messageApi.open({
      type: "error",
      content: <p style={{ color: "black" }}>{message}</p>,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState({
    status: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:8088/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          credentials: "include",
        });

        const data = await res.json();
        if (data?.statusCode == 403) {
        } else {
          console.log(data);
          setUserGoogleData(data);
          // Chuyển object thành chuỗi JSON
          const userGoogleJSON = JSON.stringify(data);

          // Lưu chuỗi JSON vào localStorage
          localStorage.setItem("userGoogle", userGoogleJSON);
          router.push("/register");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Danh sách các state error và các hàm set tương ứng
    const errorStates = [
      { state: email, setStateError: setEmailError },
      { state: password, setStateError: setPasswordError },
    ];

    // Kiểm tra tất cả các trường và thiết lập state error khi cần thiết
    let hasError = false;
    errorStates.forEach(({ state, setStateError }) => {
      if (state === "") {
        setStateError({ status: true, message: "" });
        hasError = true;
      } else {
        setStateError({ status: false, message: "" });
      }
    });

    if (hasError || emailError.status || passwordError.status) {
      console.log(hasError, emailError.status, passwordError.status);
      console.log("Vui lòng điền thông tin cần thiếu.");
    }

    if (!hasError) {
      localStorage.setItem("email", email);
      const postData = {
        email: email,
        password: password,
      };

      console.log(postData);

      setSpinning(true);
      try {
        // Thực hiện POST API bằng fetch
        const response = await fetch(
          "http://localhost:8088/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );

        // Xử lý response nếu cần
        const responseData = await response.json();
        console.log("Response từ API:", responseData);

        if (
          responseData?.statusCode == 404 &&
          responseData?.message === "User with the provided email not found."
        ) {
          emailRef.current.focus();
          error("Email của bạn không tồn tại.");
          setEmailError({ status: true, message: "" });
          localStorage.removeItem("token");
          setSpinning(false);
          return;
        }
        if (
          responseData?.statusCode == 401 &&
          responseData?.message === "Incorrect password."
        ) {
          passwordRef.current.focus();
          error("Password của bạn không đúng.");
          setPasswordError({ status: true, message: "" });
          localStorage.removeItem("token");
          setSpinning(false);
          return;
        }

        setSpinning(false);
        // Lưu token vào Local Storage
        localStorage.setItem("token", responseData.token);
        router.push("/profile");
      } catch (error) {
        console.error(error);
        // Hiển thị thông báo lỗi cho người dùng nếu cần
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />
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
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Địa chỉ email</label>
                      <input
                        type="email"
                        className="my-form-control"
                        placeholder="Địa chỉ email của bạn"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          border: emailError?.status ? "1px solid red" : "",
                        }}
                        ref={emailRef}
                      />
                      {emailError?.status && (
                        <p style={{ color: "red" }}>{emailError?.message}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Mật khẩu</label>
                      <div style={{ position: "relative", display: "block" }}>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="my-form-control"
                          placeholder="Mật khẩu"
                          style={{
                            border: passwordError?.status && "1px solid red",
                          }}
                          onChange={(e) => setPassword(e.target.value)}
                          ref={passwordRef}
                        />
                        <i
                          className={`fa-solid ${
                            showPassword ? "fa-eye" : "fa-eye-slash"
                          }`}
                          style={{
                            fontSize: "15px",
                            color: "gray",
                            position: "absolute",
                            top: "50%",
                            right: "21px", // Điều chỉnh vị trí của biểu tượng eye
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                          onClick={handleTogglePassword}
                        ></i>
                      </div>
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
                        href="http://localhost:8088/oauth2/authorization/google"
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
