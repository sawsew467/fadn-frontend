"use client";
import { useEffect, useRef, useState } from "react";
import { Button, message, Space, Spin } from "antd";
import { validatePassword } from "@/input-validate/index.js";

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const [currentPasswordError, setCurrentPasswordError] = useState({
    status: false,
    message: "",
  });
  const [newPasswordError, setNewPasswordError] = useState({
    status: false,
    message: "",
  });
  const [newPasswordConfirmError, setNewPasswordConfirmErrorError] = useState({
    status: false,
    message: "",
  });

  const error = (message) => {
    messageApi.open({
      type: "error",
      content: <p style={{ color: "black" }}>{message}</p>,
    });
  };
  const success = (message) => {
    messageApi.open({
      type: "success",
      content: <p style={{ color: "black" }}>{message}</p>,
    });
  };

  const handleTogglePassword = (inputType) => {
    switch (inputType) {
      case "current":
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirm":
        setShowNewPasswordConfirm(!showNewPasswordConfirm);
        break;
      default:
        break;
    }
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.name);
    // const validPassword = validatePassword(event.target.value);
    // if (!validPassword.valid) {
    //   setNewPassword({
    //     status: true,
    //     message: validPassword.message,
    //   });
    // } else {
    //   setNewPassword({
    //     status: false,
    //     message: "",
    //   });
    // }
    // setNewPassword(event.target.value);
  };
  // --------------------------------------------------------------------------
  const validateCurrentPassword = async () => {
    const TOKEN = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const formPasswordData = {
      password: currentPassword,
    };
    try {
      const res = await fetch(
        "http://localhost:8080/api/v1/users/" +
          userId +
          "/update-password/" +
          currentPassword,
        {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
          },
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.statusCode === 200) {
        console.log("Mật khảu hiện tại đúng!");
        return true;
      } else {
        error("Mật khẩu hiện tại không chính xác.");
        return false;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false; // Trả về false nếu có lỗi xảy ra trong quá trình gửi yêu cầu đến server
    }
  };

  const validateNewPassword = () => {
    const validation = validatePassword(newPassword);
    if (!validation.valid) {
      setNewPasswordError({
        status: true,
        message: validation.message,
      });
      return false;
    } else {
      setNewPasswordError({
        status: false,
        message: "",
      });
    }
    return true;
  };

  const validateConfirmNewPassword = () => {
    console.log(newPassword !== newPasswordConfirm);
    if (newPassword !== newPasswordConfirm) {
      error("Mật khẩu mới và mật khẩu xác nhận không khớp.");
      return false;
    }
    return true;
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    console.log(currentPassword);
    console.log(newPassword);
    console.log(newPasswordConfirm);
    if (await validateCurrentPassword()) {
      if (
        (await validateNewPassword()) &&
        (await validateConfirmNewPassword())
      ) {
        const TOKEN = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        console.log("userId from updated: ", userId);
        const formPasswordData = {
          password: newPassword,
        };

        try {
          const res = await fetch(
            "http://localhost:8080/api/v1/users/" + userId,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + TOKEN,
              },
              body: JSON.stringify(formPasswordData),
            }
          );

          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }

        success("Đổi mật khẩu thành công.");
        // Reset các trường nhập để chuẩn bị cho lần đổi mật khẩu tiếp theo
        setCurrentPassword("");
        setNewPassword("");
        setNewPasswordConfirm("");
      }
    }
  };

  return (
    <>
      {contextHolder}
      <div className="page-title">Thay đổi mật khẩu</div>
      <form onSubmit={handleChangePassword}>
        <div className="input-info-box mt-30">
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="my-input-box">
                  <label htmlFor="">Mật khẩu hiện tại</label>
                  <div style={{ position: "relative", display: "block" }}>
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      className="my-form-control"
                      placeholder="Mật khẩu hiện tại"
                      value={currentPassword}
                      style={{
                        border: currentPasswordError?.status && "1px solid red",
                      }}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <i
                      className={`fa-solid ${
                        showCurrentPassword ? "fa-eye" : "fa-eye-slash"
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
                      onClick={() => handleTogglePassword("current")}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Mật khẩu mới</label>
                  <div style={{ position: "relative", display: "block" }}>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="my-form-control"
                      placeholder="Mật khẩu mới"
                      value={newPassword}
                      style={{
                        border: newPasswordError?.status && "1px solid red",
                      }}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <i
                      className={`fa-solid ${
                        showNewPassword ? "fa-eye" : "fa-eye-slash"
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
                      onClick={() => handleTogglePassword("new")}
                    ></i>
                  </div>
                  {newPasswordError && (
                    <p style={{ color: "red" }}>{newPasswordError?.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Xác nhận mật khẩu mới</label>
                  <div style={{ position: "relative", display: "block" }}>
                    <input
                      type={showNewPasswordConfirm ? "text" : "password"}
                      className="my-form-control"
                      placeholder="Mật khẩu mới"
                      value={newPasswordConfirm}
                      style={{
                        border:
                          newPasswordConfirmError?.status && "1px solid red",
                      }}
                      onChange={(e) => setNewPasswordConfirm(e.target.value)}
                    />
                    <i
                      className={`fa-solid ${
                        showNewPasswordConfirm ? "fa-eye" : "fa-eye-slash"
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
                      onClick={() => handleTogglePassword("confirm")}
                    ></i>
                  </div>
                  {newPasswordConfirmError && (
                    <p style={{ color: "red" }}>
                      {newPasswordConfirmError?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <a href="#" style={{ textDecoration: "none" }}>
                  Quên mật khẩu?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons  mt-30">
          <button type="submit" className="custom-button">
            Lưu thay đổi
          </button>
          {/* <button className="custom-button2">Xóa thay đổi</button> */}
        </div>
      </form>
    </>
  );
}
