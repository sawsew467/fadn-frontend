"use client";

import { useRef, useState } from "react";
import { message, Spin } from "antd";
import { useRouter } from "next/navigation";

export default function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [spinning, setSpinning] = useState(false);

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateCurrentPassword = async () => {
    const TOKEN = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (password === "") {
      error("Bạn đã không nhập mật khẩu.");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:8080/api/v1/users/" +
          userId +
          "/update-password/" +
          password,
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
      }

      error("Mật khẩu hiện tại không chính xác.");
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleDeleteAccount = async () => {
    // Gửi yêu cầu kiểm tra mật khẩu đến server
    // Nếu mật khẩu đúng, hiển thị confirm box
    if (await validateCurrentPassword()) {
      await setConfirmVisible(true);
    } else {
      setConfirmVisible(false);
    }
  };

  const handleConfirmDelete = async () => {
    const TOKEN = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    setSpinning(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/users/" + userId, {
        method: "DELETE",
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
      });

      success("Hẹn gặp lại bạn sau này.");
      console.log("Tài khoản đã được xóa!");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      setSpinning(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />
      <div className="page-title">Xóa tài khoản</div>

      <div className="input-info-box mt-30">
        <div className="header">Cảnh báo:</div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <p>
                Nếu bạn xóa tài khoản của mình, bạn sẽ bị hủy đăng ký khỏi tất
                cả những người theo dõi và bạn bè của mình và sẽ mất quyền truy
                cập vĩnh viễn.
              </p>
              <div className="my-input-box">
                <div style={{ position: "relative", display: "block" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="my-form-control"
                    placeholder="Mật khẩu"
                    style={{
                      border: passwordError?.status && "1px solid red",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    ref={passwordRef}
                  />
                  {/* <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={handleChangePassword}
                /> */}
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
            </div>
          </div>
        </div>
      </div>
      <div className="buttons  mt-30">
        <button
          type="button"
          className="custom-button"
          onClick={handleDeleteAccount}
        >
          Xóa tài khoản
        </button>
      </div>
      {confirmVisible && (
        <div className="confirm-box">
          <p>Bạn có chắc chắn muốn xóa tài khoản?</p>
          <div>
            <button type="button" onClick={handleConfirmDelete}>
              Xác nhận
            </button>
            <button type="button" onClick={() => setConfirmVisible(false)}>
              Hủy
            </button>
          </div>
        </div>
      )}
    </>
  );
}
