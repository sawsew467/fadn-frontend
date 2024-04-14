"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useRef } from "react";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/main.css";
import "@/styles/css/dark.css";
import "@/styles/css/responsive.css";
import { Modal, Popover, Button, message, Steps, theme, Spin } from "antd";
import Link from "next/link";

import AccountDetails from "@/components/modules/auth/SignUp/AccountDetails.jsx";
import ProfileDetails from "@/components/modules/auth/SignUp/ProfileDetails.jsx";
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePhone,
  validateBirthOfDate,
  validateGender,
  validateLookingFor,
  validateStatus,
} from "@/input-validate/index.js";
import { useRouter, useSearchParams } from "next/navigation";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [genderLookingFor, setGenderLookingFor] = useState("");
  const [status, setStatus] = useState("2");
  const [city, setCity] = useState("");

  const [emailError, setEmailError] = useState({
    status: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: "",
  });

  const [firstnameError, setFirstnameError] = useState({
    status: false,
    message: "",
  });
  const [lastnameError, setLastnameError] = useState({
    status: false,
    message: "",
  });
  const [nicknameError, setNicknameError] = useState({
    status: false,
    message: "",
  });
  const [phoneError, setPhoneError] = useState({ status: false, message: "" });
  const [birthdayError, setBirthdayError] = useState({
    status: false,
    message: "",
  });
  const [genderError, setGenderError] = useState({
    status: false,
    message: "",
  });
  const [genderLookingForError, setGenderLookingForError] = useState({
    status: false,
    message: "",
  });
  const [statusError, setStatusError] = useState({
    status: false,
    message: "",
  });
  const [cityError, setCityError] = useState({
    status: false,
    message: "",
  });

  // useEffect(() => {
  //   const userGoogleJSON = localStorage.getItem("userGoogle");
  //   const userObject = JSON.parse(userGoogleJSON);
  //   if (userObject) {
  //     console.log(userObject);
  //     setEmail(userObject.email);
  //     setPassword(userObject.email); // password is email
  //     setFirstname(userObject.given_name);
  //     setLastname(userObject.family_name);
  //     localStorage.removeItem("userGoogle");
  //   } else {
  //     setEmail("");
  //     setPassword(""); // password is email
  //     setFirstname("");
  //     setLastname("");
  //     console.log("Không tìm thấy userObject trong localStorage");
  //   }
  // }, []);

  // --------------------------------------------
  const handleEmailChange = (event) => {
    const validEmail = validateEmail(event.target.value);
    if (!validEmail.valid) {
      setEmailError({
        status: true,
        message: validEmail.message,
      });
    } else {
      setEmailError({
        status: false,
        message: "",
      });
    }
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    const validPassword = validatePassword(event.target.value);
    if (!validPassword.valid) {
      setPasswordError({
        status: true,
        message: validPassword.message,
      });
    } else {
      setPasswordError({
        status: false,
        message: "",
      });
    }
    setPassword(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    const validFirstName = validateName(event.target.value);
    if (!validFirstName.valid) {
      setFirstnameError({
        status: true,
        message: validFirstName.message,
      });
    } else {
      setFirstnameError({
        status: false,
        message: "",
      });
    }
    setFirstname(event.target.value);
  };
  const handleLastNameChange = (event) => {
    const validLastName = validateName(event.target.value);
    if (!validLastName.valid) {
      setLastnameError({
        status: true,
        message: validLastName.message,
      });
    } else {
      setLastnameError({
        status: false,
        message: "",
      });
    }
    setLastname(event.target.value);
  };
  const handleNickNameChange = (event) => {
    // const validNickName = validateName(event.target.value);
    // if (!validNickName.valid) {
    //   setNicknameError({
    //     status: true,
    //     message: validNickName.message,
    //   });
    // } else {
    //   setNicknameError({
    //     status: false,
    //     message: "",
    //   });
    // }
    setNickname(event.target.value);
  };
  const handlePhoneChange = (event) => {
    const validPhone = validatePhone(event.target.value);
    if (!validPhone.valid) {
      setPhoneError({
        status: true,
        message: validPhone.message,
      });
    } else {
      setPhoneError({
        status: false,
        message: "",
      });
    }
    setPhone(event.target.value);
  };
  const handleBirthdayChange = (event) => {
    const validBirthday = validateBirthOfDate(event.target.value);
    if (!validBirthday.valid) {
      setBirthdayError({
        status: true,
        message: validBirthday.message,
      });
    } else {
      setBirthdayError({
        status: false,
        message: "",
      });
    }
    setBirthday(event.target.value);
  };
  const handleGenderChange = (event) => {
    if (event.target.value !== undefined || event.target.value !== "") {
      setGenderError({
        ...prev,
        status: false,
      });
    } else {
      setGenderError({
        ...prev,
        status: true,
      });
    }
    setGender(event.target.value);
  };
  const handleGenderLookingForChange = (event) => {
    if (event.target.value !== undefined || event.target.value !== "") {
      setGenderLookingForError({
        ...prev,
        status: false,
      });
    } else {
      setGenderLookingForError({
        ...prev,
        status: true,
      });
    }
    setGenderLookingFor(event.target.value);
  };

  // --------------------------------------------
  const steps = [
    {
      title: <h4 className="content-title">Tạo tài khoản</h4>,
      content: (
        <AccountDetails
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          emailError={emailError}
          setEmailError={setEmailError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          onlyRead={false}
        />
      ),
    },
    {
      title: <h4 className="content-title">Thông tin cá nhân</h4>,
      content: (
        <ProfileDetails
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname}
          nickname={nickname}
          setNickname={setNickname}
          phone={phone}
          setPhone={setPhone}
          birthday={birthday}
          setBirthday={setBirthday}
          gender={gender}
          setGender={setGender}
          genderLookingFor={genderLookingFor}
          setGenderLookingFor={setGenderLookingFor}
          status={status}
          setStatus={setStatus}
          city={city}
          setCity={setCity}
          firstnameError={firstnameError}
          setFirstnameError={setFirstnameError}
          lastnameError={lastnameError}
          setLastnameError={setLastnameError}
          nicknameError={nicknameError}
          setNicknameError={setNicknameError}
          phoneError={phoneError}
          setPhoneError={setPhoneError}
          birthdayError={birthdayError}
          setBirthdayError={setBirthdayError}
          genderError={genderError}
          setGenderError={setGenderError}
          genderLookingForError={genderLookingForError}
          setGenderLookingForError={setGenderLookingForError}
          statusError={statusError}
          setStatusError={setStatusError}
          cityError={cityError}
          setCityError={setCityError}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleNickNameChange={handleNickNameChange}
          handlePhoneChange={handlePhoneChange}
          handleBirthdayChange={handleBirthdayChange}
          handleGenderChange={handleGenderChange}
          handleGenderLookingForChange={handleGenderLookingForChange}
          onlyRead={false}
        />
      ),
    },
    {
      title: <h4 className="content-title">Hoàn tất</h4>,
      content: (
        <>
          <AccountDetails
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            setEmailError={setEmailError}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            onlyRead={true}
          />
          <ProfileDetails
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            nickname={nickname}
            setNickname={setNickname}
            phone={phone}
            setPhone={setPhone}
            birthday={birthday}
            setBirthday={setBirthday}
            gender={gender}
            setGender={setGender}
            genderLookingFor={genderLookingFor}
            setGenderLookingFor={setGenderLookingFor}
            status={status}
            setStatus={setStatus}
            city={city}
            setCity={setCity}
            firstnameError={firstnameError}
            setFirstnameError={setFirstnameError}
            lastnameError={lastnameError}
            setLastnameError={setLastnameError}
            nicknameError={nicknameError}
            setNicknameError={setNicknameError}
            phoneError={phoneError}
            setPhoneError={setPhoneError}
            birthdayError={birthdayError}
            setBirthdayError={setBirthdayError}
            genderError={genderError}
            setGenderError={setGenderError}
            genderLookingForError={genderLookingForError}
            setGenderLookingForError={setGenderLookingForError}
            statusError={statusError}
            setStatusError={setStatusError}
            cityError={cityError}
            setCityError={setCityError}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleNickNameChange={handleNickNameChange}
            handlePhoneChange={handlePhoneChange}
            handleBirthdayChange={handleBirthdayChange}
            handleGenderChange={handleGenderChange}
            handleGenderLookingForChange={handleGenderLookingForChange}
            onlyRead={true}
          />
        </>
      ),
    },
  ];
  // --------------------------------------------

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage.getItem("verify-otp"));
    if (localStorage.getItem("verify-otp") === "success") {
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("password"));
      setCurrent(1);
      localStorage.removeItem("verify-otp");
    } else {
      console.log("CCCC");
    }
  }, []);

  const next = async (event) => {
    event.preventDefault();

    // --------------- Step 1 ---------------
    if (current == 0) {
      // Danh sách các state error và các hàm set tương ứng
      const errorStatesStep1 = [
        { state: email, setStateError: setEmailError },
        { state: password, setStateError: setPasswordError },
      ];

      // Kiểm tra tất cả các trường và thiết lập state error khi cần thiết
      let hasErrorStep1 = false;
      errorStatesStep1.forEach(({ state, setStateError }) => {
        if (state === "") {
          setStateError({ status: true, message: "" });
          hasErrorStep1 = true;
        }
      });

      if (hasErrorStep1 || emailError.status || passwordError.status) {
        console.log(hasErrorStep1, emailError.status, passwordError.status);
        console.log("Vui lòng điền thông tin Step 1 cần thiếu.");
      } else {
        if ((await handleSendEmailOTP()) == true) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          router.push("/verify-otp");
          // setCurrent((current) => current + 1);
        }
      }
    }

    // --------------- Step 2 ---------------
    if (current === 1) {
      // Danh sách các state error và các hàm set tương ứng
      const errorStatesStep2 = [
        { state: firstname, setStateError: setFirstnameError },
        { state: lastname, setStateError: setLastnameError },
        { state: nickname, setStateError: setNicknameError },
        { state: phone, setStateError: setPhoneError },
        { state: birthday, setStateError: setBirthdayError },
        { state: gender, setStateError: setGenderError },
        { state: genderLookingFor, setStateError: setGenderLookingForError },
        { state: status, setStateError: setStatusError },
        { state: city, setStateError: setCityError },
      ];
      // Kiểm tra tất cả các trường và thiết lập state error khi cần thiết
      let hasErrorStep2 = false;
      errorStatesStep2.forEach(({ state, setStateError }) => {
        if (state === "" || state === undefined) {
          setStateError({ status: true, message: "" });
          hasErrorStep2 = true;
        }
      });
      // console.log("------------------------------------------");
      // console.log("birthday: " + birthday);
      // console.log("gender: " + gender);
      // console.log("genderLookingFor: " + genderLookingFor);
      // console.log("Status: " + status);
      // console.log("city: " + city);
      // console.log(
      //   hasErrorStep2,
      //   firstnameError.status,
      //   lastnameError.status,
      //   nicknameError.status,
      //   phoneError.status,
      //   birthdayError.status, // false -> oke
      //   gender === "",
      //   genderLookingFor === "",
      //   status === "",
      //   city === ""
      // );
      if (
        hasErrorStep2 ||
        firstnameError.status ||
        lastnameError.status ||
        nicknameError.status ||
        phoneError.status ||
        birthdayError.status ||
        gender === "" ||
        genderLookingFor === "" ||
        status === "" ||
        city === ""
      ) {
        console.log("Vui lòng điền thông tin Step 2 cần thiếu.");
      } else {
        setCurrent((current) => current + 1);
      }
    }
  };

  const prev = (event) => {
    event.preventDefault();
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: "260px",
    // textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 20,
  };

  const [spinning, setSpinning] = useState(false);
  const handleSendEmailOTP = async () => {
    setSpinning(true);
    const codeOtp = Math.floor(111111 + Math.random() * (999999 - 111111 + 1));
    localStorage.setItem("otpCode", codeOtp);

    const postData = {
      recipient: email,
      subject: "Cupid Dating Verification Email",
      message: codeOtp,
    };

    try {
      // Thực hiện POST API bằng fetch
      const response = await fetch(
        "http://localhost:8080/api/v1/send-mail-otp",
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

      if (responseData?.statusCode == 208 && responseData?.message.length > 0) {
        setEmailError({
          status: true,
          message: "Email của bạn đã đăng kí trước đây rồi.",
        });
        setSpinning(false);
        return false;
      }

      setSpinning(false);
      return true;
      // Modal thông báo confirm đã gửi email
      // Modal.success(modal);
    } catch (error) {
      console.error(error);
      // Hiển thị thông báo lỗi cho người dùng nếu cần
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSpinning(true);
    const postData = {
      userDTO: {
        firstName: firstname,
        lastName: lastname,
        nickname: nickname,
        password: password,
        genderDTO: { id: gender },
        statusDTO: { id: status },
        email: email,
        phone: phone,
        city: city,
        dob: birthday,
        fbAccountId: null,
        googleAccountId: null,
        confirmationCode: localStorage.getItem("otpCode"),
        profileDTO: null,
      },
      interestGenderDTO: {
        genderDTO: { id: genderLookingFor },
      },
    };

    console.log(postData);

    try {
      // Thực hiện POST API bằng fetch
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
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

      if (responseData?.statusCode == 208 && responseData?.message.length > 0) {
        setEmailError({
          status: true,
          message: "Email của bạn đã đăng kí trước đây rồi.",
        });
        return;
      }

      // Lưu token vào Local Storage
      localStorage.setItem("token", responseData.token);

      // localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("otpCode");
      setSpinning(false);
      router.push("/profile");
    } catch (error) {
      console.error(error);
      // Hiển thị thông báo lỗi cho người dùng nếu cần
    }
  };
  // ---------------------------------------------------------------------------

  return (
    <>
      <Spin spinning={spinning} fullscreen />
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
              className="image"
              style={{
                backgroundImage: "url('/pageImages/reg.jpg')",
              }}
            ></div>
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Chào mừng tới CUPID CONNECT</h2>
                  <p>
                    Hãy tạo hồ sơ của bạn! Chỉ cần điền thông tin bên dưới và
                    bạn sẽ nhận được một tài khoản mới.
                  </p>
                </div>
                <div className="main-content">
                  <form onSubmit={handleSubmit}>
                    <Steps current={current} items={items} />
                    <div style={contentStyle}>{steps[current].content}</div>
                    <div
                      style={{
                        marginTop: 24,
                      }}
                    >
                      {current < steps.length - 1 && (
                        <button
                          className="custom-button"
                          onClick={(event) => next(event)}
                          // disabled={emailError.status ? true : false}
                        >
                          Tiếp theo
                        </button>
                      )}
                      {current === steps.length - 1 && (
                        <button type="submit" className="custom-button">
                          Đăng kí
                        </button>
                      )}
                      {current > 0 && (
                        <button
                          className="custom-button"
                          style={{
                            margin: "0 8px",
                          }}
                          onClick={(event) => prev(event)}
                        >
                          Quay về
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
