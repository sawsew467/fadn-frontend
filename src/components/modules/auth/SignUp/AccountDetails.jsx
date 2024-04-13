import React, { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "@/input-validate/index.js";

function AccountDetails({
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  handleEmailChange,
  handlePasswordChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
  }, []);

  return (
    <>
      <h4 className="content-title">Tạo tài khoản</h4>
      <div className="form-group">
        <label
          htmlFor=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Địa chỉ email
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        </label>

        <input
          type="email"
          className="my-form-control"
          placeholder="Địa chỉ email của bạn"
          onChange={handleEmailChange}
          value={email}
          style={{
            border: emailError?.status ? "1px solid red" : "",
          }}
        />
        {emailError?.status && (
          <p style={{ color: "red" }}>{emailError?.message}</p>
        )}
      </div>
      <div className="form-group">
        <label
          htmlFor=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Mật khẩu<span style={{ color: "red" }}>*</span>
        </label>
        <div style={{ position: "relative", display: "block" }}>
          <input
            type={showPassword ? "text" : "password"}
            className="my-form-control"
            placeholder="Mật khẩu"
            onChange={handlePasswordChange}
            value={password}
            style={{ border: passwordError?.status && "1px solid red" }}
          />
          <i
            className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
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
        {passwordError && (
          <p style={{ color: "red" }}>{passwordError?.message}</p>
        )}
      </div>
      {/* <div className="form-group">
        <label
          htmlFor=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Confirm Password<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="my-form-control"
          placeholder="Re-enter Your Password"
        />
      </div> */}
    </>
  );
}

export default AccountDetails;
