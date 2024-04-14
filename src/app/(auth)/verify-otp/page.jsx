"use client";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/main.css";
import "@/styles/css/dark.css";
import "@/styles/css/responsive.css";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { Button, message, Space, Spin } from "antd";

export default function ModalOtp() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".otp-field > input");
    const button = document.querySelector(".btn");

    window.addEventListener("load", () => inputs[0].focus());
    button.setAttribute("disabled", "disabled");

    inputs[0].addEventListener("paste", function (event) {
      event.preventDefault();

      const pastedValue = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
      const otpLength = inputs.length;

      for (let i = 0; i < otpLength; i++) {
        if (i < pastedValue.length) {
          inputs[i].value = pastedValue[i];
          inputs[i].removeAttribute("disabled");
          inputs[i].focus;
        } else {
          inputs[i].value = ""; // Clear any remaining inputs
          inputs[i].focus;
        }
      }
    });

    inputs.forEach((input, index1) => {
      input.addEventListener("keyup", (e) => {
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        if (currentInput.value.length > 1) {
          currentInput.value = "";
          return;
        }

        if (
          nextInput &&
          nextInput.hasAttribute("disabled") &&
          currentInput.value !== ""
        ) {
          nextInput.removeAttribute("disabled");
          nextInput.focus();
        }

        if (e.key === "Backspace") {
          inputs.forEach((input, index2) => {
            if (index1 <= index2 && prevInput) {
              input.setAttribute("disabled", true);
              input.value = "";
              prevInput.focus();
            }
          });
        }

        button.classList.remove("active");
        button.setAttribute("disabled", "disabled");

        const inputsNo = inputs.length;
        if (
          !inputs[inputsNo - 1].disabled &&
          inputs[inputsNo - 1].value !== ""
        ) {
          button.classList.add("active");
          button.removeAttribute("disabled");

          return;
        }
      });
    });
  }, []);

  const router = useRouter();
  const [otpValue, setOtpValue] = useState(""); // State để lưu giá trị OTP

  const [messageApi, contextHolder] = message.useMessage();

  const success = (message) => {
    messageApi.open({
      type: "success",
      content: <p style={{ color: "black" }}>{message}</p>,
    });
  };
  const error = (message) => {
    messageApi.open({
      type: "error",
      content: <p style={{ color: "black" }}>{message}</p>,
    });
  };

  const [spinning, setSpinning] = useState(false);
  const handleSendEmailOTP = async () => {
    setSpinning(true);
    const codeOtp = Math.floor(111111 + Math.random() * (999999 - 111111 + 1));
    localStorage.setItem("otpCode", codeOtp);
    const email = localStorage.getItem("email");

    const postData = {
      recipient: email,
      subject: "Cupid Dating Verification Email",
      message: codeOtp,
    };

    try {
      // Thực hiện POST API bằng fetch
      const response = await fetch(
        "http://localhost:8088/api/v1/send-mail-otp",
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

      setSpinning(false);
      success("Đã gửi lại OTP thành công!");
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  // Hàm xử lý khi người dùng thay đổi giá trị của ô input
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setOtpValue((prevOtpValue) => {
      const newOtpValue = [...prevOtpValue];
      newOtpValue[index] = value; // Cập nhật giá trị tại index tương ứng
      return newOtpValue;
    });
  };

  // Hàm xử lý khi người dùng nhấn vào nút Verify
  const handleVerify = () => {
    const otpCodeEntered = otpValue.join(""); // Ghép các giá trị trong mảng thành một chuỗi
    const otpCode = localStorage.getItem("otpCode");

    if (otpCodeEntered === otpCode) {
      success("Xác nhận OTP thành công!");
      localStorage.setItem("verify-otp", "success");
      router.back();
    } else {
      error("Bạn đã nhập sai OTP!");
    }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4" style={{ minWidth: "500px" }}>
          <div
            className="card bg-white mb-5 mt-5 border-0"
            style={{ boxShadow: "0 12px 15px rgba(0, 0, 0, 0.02)" }}
          >
            <div className="card-body p-5 text-center">
              <h4>Xác nhận OTP</h4>
              <p style={{ color: "black" }}>
                Mã OTP đã được gửi thông qua email của bạn
              </p>

              <div className="otp-field mb-4">
                <input
                  type="number"
                  value={otpValue[0]}
                  onChange={(e) => handleInputChange(e, 0)}
                />
                <input
                  type="number"
                  value={otpValue[1]}
                  onChange={(e) => handleInputChange(e, 1)}
                  disabled
                />
                <input
                  type="number"
                  value={otpValue[2]}
                  onChange={(e) => handleInputChange(e, 2)}
                  disabled
                />
                <input
                  type="number"
                  value={otpValue[3]}
                  onChange={(e) => handleInputChange(e, 3)}
                  disabled
                />
                <input
                  type="number"
                  value={otpValue[4]}
                  onChange={(e) => handleInputChange(e, 4)}
                  disabled
                />
                <input
                  type="number"
                  value={otpValue[5]}
                  onChange={(e) => handleInputChange(e, 5)}
                  disabled
                />
              </div>

              <button
                className="btn btn-primary mb-3"
                style={{
                  color: "white",
                  backgroundColor: "#1677ff",
                }}
                onClick={handleVerify}
              >
                Xác nhận
              </button>

              <p className="resend text-muted mb-0">
                Không nhận được mã OTP?{" "}
                <a
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  onClick={handleSendEmailOTP}
                >
                  Gửi lại
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
