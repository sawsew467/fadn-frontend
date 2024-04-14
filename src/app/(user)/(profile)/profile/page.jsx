"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import citiesJson from "@/components/modules/auth/SignUp/cites";
import { Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Spin, Image } from "antd";
import { Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
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
import axios from "axios";

// Sample cities data
const cities = citiesJson;

const initialUser = {
  id: "",
  interestGenderId: "",
  firstname: "",
  lastname: "",
  nickname: "",
  gender: "",
  status: "",
  email: "",
  phone: "",
  city: "",
  avatar: "",
  intro: "",
  hobbies: "",
  workAt: "",
  genderLookingFor: "",
};

export default function ProfilePage() {
  const [openPanel, setOpenPanel] = useState("collapseOne");
  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = (content) => {
    messageApi.open({
      type: "success",
      content: <p style={{ color: "black" }}>{content}</p>,
      duration: 2,
    });
  };

  const errorMessage = (content) => {
    messageApi.open({
      type: "error",
      content: <p style={{ color: "black" }}>{content}</p>,
      duration: 2,
    });
  };

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

  const [selectedCity, setSelectedCity] = useState("");
  const [filteredCities, setFilteredCities] = useState({
    name: "",
    name_en: "",
  });
  const [showDropdown, setShowDropdown] = useState(false);

  function filterCities(selectedCity) {
    return cities.filter((city) =>
      city.name.toLowerCase().includes(selectedCity.toLowerCase())
    );
  }

  function handleCityChange(event) {
    const value = event.target.value;
    setSelectedCity(value);
    setFilteredCities(filterCities(value));
    setShowDropdown(!!value); // Show dropdown when input is not empty
  }

  function handleOptionCityClick(cityName) {
    // set City
    setUserUpdated({
      ...userUpdated,
      city: cityName,
    });
    // setCityError({
    //   status: false,
    //   message: "",
    // });
    setSelectedCity(cityName);
    setShowDropdown(false);
  }

  const handleTogglePanel = (panelId) => {
    setOpenPanel(panelId === openPanel ? null : panelId);
  };

  // ---------------------------------------------------------------------------

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [avatarUrlLoading, setAvatarUrlLoading] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [spinning, setSpinning] = useState(false);

  const [userUpdated, setUserUpdated] = useState(initialUser);

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

  const [genderError, setGenderError] = useState({
    status: false,
    message: "",
  });

  const [statusError, setStatusError] = useState({
    status: false,
    message: "",
  });

  const [emailError, setEmailError] = useState({
    status: false,
    message: "",
  });

  const [phoneError, setPhoneError] = useState({
    status: false,
    message: "",
  });

  const [cityError, setCityError] = useState({
    status: false,
    message: "",
  });

  const [avatarError, setAvatarError] = useState({
    status: false,
    message: "",
  });

  const [introError, setIntroError] = useState({
    status: false,
    message: "",
  });

  const [hobbiesError, setHobbiesError] = useState({
    status: false,
    message: "",
  });

  const [workAtError, setWorkAtError] = useState({
    status: false,
    message: "",
  });

  const [genderLookingForError, setGenderLookingForError] = useState({
    status: false,
    message: "",
  });

  // fetch user data
  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    const EMAIL = localStorage.getItem("email");

    (async () => {
      const res = await fetch(
        "http://localhost:8088/api/v1/users/email/" + EMAIL,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + TOKEN,
          },
        }
      ).catch((error) => {
        console.log(error);
      });

      const data = await res?.json();
      setUserData(data);
      localStorage.setItem("userId", data.id);
      console.log(data);
      setAvatarUrl(data?.profileDTO?.avatar);
      setUserUpdated({
        ...userUpdated,
        id: data.id,
        interestGenderId: data.interestGenders[0]?.id,
        firstname: data.firstName,
        lastname: data.lastName,
        nickname: data.nickname,
        gender: data.genderDTO.id,
        status: data.statusDTO.id,
        email: data.email,
        phone: data.phone,
        // dob (birthday) không được update!
        city: data.city,
        avatar: data.profileDTO?.avatar,
        intro: data.profileDTO?.intro,
        hobbies: data.profileDTO?.hobbies,
        workAt: data.profileDTO?.workAt,
        genderLookingFor: data.interestGenders[0]?.genderDTO.id,
      });
      setLoading(false); // Tắt hiệu ứng Skeleton
    })();
  }, []);

  // handle error input
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
    setUserUpdated({
      ...userUpdated,
      firstname: event.target.value,
    });
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
    setUserUpdated({
      ...userUpdated,
      lastname: event.target.value,
    });
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
    setUserUpdated({
      ...userUpdated,
      nickname: event.target.value,
    });
  };
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
    setUserUpdated({
      ...userUpdated,
      email: event.target.value,
    });
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
    setUserUpdated({
      ...userUpdated,
      phone: event.target.value,
    });
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
    setUserUpdated({
      ...userUpdated,
      gender: event.target.value,
    });
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
    setUserUpdated({
      ...userUpdated,
      genderLookingFor: event.target.value,
    });
  };
  // handle upload avatar
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Tạo formData để gửi tệp hình ảnh lên imgbb
      setAvatarUrlLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=c9a0d416d3771b79bea983ffbb51811e",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.data.url;

          successMessage("Bạn đã đăng avatar thành công.");
          setAvatarUrl(imageUrl);
          setUserUpdated({
            ...userUpdated,
            avatar: imageUrl,
          });
          setAvatarUrlLoading(false);
        } else {
          errorMessage("Lỗi khi tải lên ảnh, vui lòng thử lại sau.");
        }
      } catch (error) {
        errorMessage("Đã xảy ra lỗi khi kết nối đến máy chủ.");
        console.log(error);
      }
    }
  };

  // check last time
  const checkInputBeforeUpdate = () => {
    // Danh sách các state error và các hàm set tương ứng
    const errorStates = [
      { state: userUpdated.firstname, setStateError: setFirstnameError },
      { state: userUpdated.lastname, setStateError: setLastnameError },
      { state: userUpdated.nickname, setStateError: setNicknameError },
      { state: userUpdated.gender, setStateError: setGenderError },
      { state: userUpdated.status, setStateError: setStatusError },
      { state: userUpdated.email, setStateError: setEmailError },
      { state: userUpdated.phone, setStateError: setPhoneError },
      { state: userUpdated.city, setStateError: setCityError },
      {
        state: userUpdated.genderLookingFor,
        setStateError: setGenderLookingForError,
      },
    ];
    // Kiểm tra tất cả các trường và thiết lập state error khi cần thiết
    let hasError = false;
    errorStates.forEach(({ state, setStateError }) => {
      if (state === "" || state === undefined) {
        console.log(state);
        setStateError({ status: true, message: "" });
        hasError = true;
      }
    });
    console.log("------------------------------------------");
    console.log("gender: " + userUpdated.gender);
    console.log("genderLookingFor: " + userUpdated.genderLookingFor);
    console.log("Status: " + userUpdated.status);
    console.log("city: " + userUpdated.city);
    console.log(
      hasError,
      emailError.status,
      firstnameError.status,
      lastnameError.status,
      nicknameError.status,
      phoneError.status,
      userUpdated.gender === "",
      userUpdated.genderLookingFor === "",
      userUpdated.status === "",
      userUpdated.city === ""
    );
    if (
      hasError ||
      firstnameError.status ||
      lastnameError.status ||
      nicknameError.status ||
      phoneError.status ||
      emailError.status ||
      userUpdated.gender === "" ||
      userUpdated.genderLookingFor === "" ||
      userUpdated.status === "" ||
      userUpdated.city === ""
    ) {
      console.log("Vui lòng điền thông tin cần thiếu.");
    } else {
      console.log("Điền thông tin đầy đủ.");
    }
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);

  // post user updated
  const handleSubmit = async (e) => {
    e.preventDefault();

    checkInputBeforeUpdate();

    setSpinning(true);

    const formUserUpdatedData = {
      firstName: userUpdated.firstname,
      lastName: userUpdated.lastname,
      nickname: userUpdated.nickname,
      genderDTO: {
        id: userUpdated.gender,
      },
      statusDTO: {
        id: userUpdated.status,
      },
      email: userUpdated.email,
      phone: userUpdated.phone,
      city: userUpdated.city,
      profileDTO: {
        avatar: userUpdated.avatar,
        intro: userUpdated.intro,
        hobbies: userUpdated.hobbies,
        workAt: userUpdated.workAt,
      },
    };

    const formInterestGenderData = {
      genderDTO: {
        id: userUpdated.genderLookingFor,
      },
    };

    console.log(formUserUpdatedData, formInterestGenderData);
    console.log(fileList);

    // const TOKEN = localStorage.getItem("token");
    // const EMAIL = localStorage.getItem("email");
    // const userId = localStorage.getItem("userId");

    // try {
    //   const response = await fetch(
    //     "http://localhost:8088/api/v1/users/" + userId,
    //     {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + TOKEN,
    //       },
    //       body: JSON.stringify(formUserUpdatedData),
    //     }
    //   );

    //   // Xử lý response nếu cần
    //   const responseData = await response.json();
    //   if (
    //     responseData?.statusCode === 208 &&
    //     responseData?.message === "Your phone is already registered."
    //   ) {
    //     setPhoneError({
    //       status: true,
    //       message: "Số điện thoại của bạn đã được sử dụng.",
    //     });
    //     setSpinning(false);
    //     return;
    //   }
    //   if (
    //     responseData?.statusCode === 208 &&
    //     responseData?.message === "Your nickname is already registered."
    //   ) {
    //     setNicknameError({
    //       status: true,
    //       message: "Nickname của bạn đã được sử dụng.",
    //     });
    //     setSpinning(false);
    //     return;
    //   }

    //   console.log("User sau khi update:", responseData);

    //   setSpinning(false);
    // } catch (error) {
    //   console.error(error);
    //   // Hiển thị thông báo lỗi cho người dùng nếu cần
    // }

    // try {
    //   const response = await fetch(
    //     "http://localhost:8088/api/v1/users/" +
    //       userId +
    //       "/interest-gender/" +
    //       userUpdated.interestGenderId,
    //     {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + TOKEN,
    //       },
    //       body: JSON.stringify(formInterestGenderData),
    //     }
    //   );

    //   // Xử lý response nếu cần
    //   const responseData = await response.json();
    //   console.log("User InterestGender sau khi update:", responseData);

    //   setSpinning(false);
    // } catch (error) {
    //   console.error(error);
    //   // Hiển thị thông báo lỗi cho người dùng nếu cần
    // }

    successMessage("Bạn đã cập nhật profile thành công.");
    console.log(fileList);
    setPhoneError({
      status: false,
      message: "",
    });
    setNicknameError({
      status: false,
      message: "",
    });
    setSpinning(false);
  };

  // ---------------------------------------------------------------------------

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined
        style={{
          color: "white",
        }}
      />
      <div
        style={{
          marginTop: 8,
          color: "white",
        }}
      >
        Upload
      </div>
    </button>
  );

  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleCustomRequest = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("image", file);
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=c9a0d416d3771b79bea983ffbb51811e",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("fileList", fileList);
      console.log("server res: ", res);
      console.log(res?.data?.data);
      setFileList([res?.data?.data, ...fileList]);
    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    // console.log(file, fileList, event);
    //Using Hooks to update the state to the current filelist
    // setFileList(fileList);
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };
  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />

      <div className="page-title">Thông tin cá nhân</div>
      <Upload
        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"

        customRequest={handleCustomRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        // onChange={handleChange}
        accept="image/*"
        method="POST"
        onChange={handleOnChange}
        // headers={}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
          alt="image preview"
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="profile-about-box">
              <div
                className="top-bg"
                style={{
                  backgroundImage:
                    "url('/pageImages/profile/profile-box-bg.png')",
                }}
              ></div>
              <div className="p-inner-content">
                <div className="profile-img">
                  {avatarUrlLoading ? (
                    <Skeleton.Avatar
                      active
                      block={true}
                      size="large"
                      style={{ height: "120px", width: "120px" }}
                    />
                  ) : (
                    <img
                      src={
                        avatarUrl
                          ? avatarUrl
                          : // : userData
                            // ? userData?.profileDTO?.avatar
                            "/pageImages/no-user-image.png"
                      }
                      alt=""
                      style={{ width: "120px", height: "120px" }}
                    />
                  )}
                  <div className="active-online"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="up-photo-card mb-30">
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="content">
                <h4>Thay đổi avatar</h4>
                <span>Kích cỡ tối thiểu 120x120</span>
              </div>
            </div>

            <div
              className="up-pho to-card d-flex justify-content-around"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="file-input ">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  name="file-input"
                  id="file-input"
                  className="file-input__input"
                />
                <label className="file-input__label" htmlFor="file-input">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="upload"
                    className="svg-inline--fa fa-upload fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span>Đăng avatar</span>
                </label>
              </div>
              <div className="file-input-delete">
                <button
                  onClick={() => {
                    setAvatarUrl("");
                    setUserUpdated({
                      ...userUpdated,
                      avatar: "",
                    });
                  }}
                  name="file-input"
                  id="file-input"
                  className="file-input-delete__input"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <label
                    className="file-input-delete__label"
                    htmlFor="file-input-delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      style={{ width: "fit-content", color: "white" }}
                    >
                      <path
                        d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
                        style={{ color: "white" }}
                      ></path>
                    </svg>
                    <span>Xóa avatar</span>
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="input-info-box mt-30">
          <div className="header">Thông tin của bạn</div>
          <div className="content">
            <div className="row">
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Tên</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Tên của bạn"
                      defaultValue={userData ? userData?.firstName : ""}
                      onChange={handleFirstNameChange}
                      style={{
                        border: firstnameError?.status ? "1px solid red" : "",
                      }}
                    />
                  )}
                  {firstnameError?.status && (
                    <p style={{ color: "red" }}>{firstnameError?.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Họ</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Họ của bạn"
                      defaultValue={userData ? userData?.lastName : ""}
                      onChange={handleLastNameChange}
                      style={{
                        border: lastnameError?.status ? "1px solid red" : "",
                      }}
                    />
                  )}
                  {lastnameError?.status && (
                    <p style={{ color: "red" }}>{lastnameError?.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Nickname</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Nickname"
                      defaultValue={userData ? userData?.nickname : ""}
                      onChange={handleNickNameChange}
                      style={{
                        border: nicknameError?.status ? "1px solid red" : "",
                      }}
                    />
                  )}
                  {nicknameError?.status && (
                    <p style={{ color: "red" }}>{nicknameError?.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Email</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Email của bạn"
                      defaultValue={userData ? userData?.email : ""}
                      onChange={handleEmailChange}
                      style={{
                        border: emailError?.status ? "1px solid red" : "",
                      }}
                      readOnly
                    />
                  )}
                  {emailError?.status && (
                    <p style={{ color: "red" }}>{emailError?.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Số điện thoại</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      defaultValue={userData ? userData?.phone : ""}
                      onChange={handlePhoneChange}
                      style={{
                        border: phoneError?.status ? "1px solid red" : "",
                      }}
                    />
                  )}
                  {phoneError?.status && (
                    <p style={{ color: "red" }}>{phoneError?.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Giới tính</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <select
                      name="gender"
                      id="gender"
                      defaultValue={userData?.genderDTO?.id}
                      style={{
                        border: genderError?.status ? "1px solid red" : "",
                      }}
                      onChange={(event) => {
                        setUserUpdated({
                          ...userUpdated,
                          gender: event.target.value,
                        });
                      }}
                    >
                      <option
                        value="1"
                        selected={userData?.genderDTO?.id === "1"}
                      >
                        Nam
                      </option>
                      <option
                        value="2"
                        selected={userData?.genderDTO?.id === "2"}
                      >
                        Nữ
                      </option>
                      <option
                        value="3"
                        selected={userData?.genderDTO?.id === "3"}
                      >
                        Phi nhị giới
                      </option>
                    </select>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Tìm kiếm giới tính</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <select
                      name="genderLookingFor"
                      id=""
                      defaultValue={
                        userData?.genderDTO?.interestGenders?.genderDTO
                      }
                      style={{
                        border: genderLookingForError?.status
                          ? "1px solid red"
                          : "",
                      }}
                      onChange={(event) => {
                        setUserUpdated({
                          ...userUpdated,
                          genderLookingFor: event.target.value,
                        });
                      }}
                    >
                      <option
                        value="1"
                        selected={
                          userData?.interestGenders[0]?.genderDTO?.id === 1
                        }
                      >
                        Nam
                      </option>
                      <option
                        value="2"
                        selected={
                          userData?.interestGenders[0]?.genderDTO?.id === 2
                        }
                      >
                        Nữ
                      </option>
                    </select>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Ngày sinh</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input type="date" defaultValue={userData?.dob} readOnly />
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-input-box">
                  <label htmlFor="">Tình trạng hôn nhân</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <select
                      name="status"
                      id=""
                      defaultValue={userData?.statusDTO?.id}
                      style={{
                        border: statusError?.status ? "1px solid red" : "",
                      }}
                      onChange={(event) => {
                        setUserUpdated({
                          ...userUpdated,
                          status: event.target.value,
                        });
                      }}
                    >
                      <option
                        value="2"
                        selected={userData?.statusDTO?.id === 2}
                      >
                        Độc thân
                      </option>
                      <option
                        value="1"
                        selected={userData?.statusDTO?.id === 1}
                      >
                        Đã cưới
                      </option>
                      <option
                        value="3"
                        selected={userData?.statusDTO?.id === 3}
                      >
                        Đang trong mối quan hệ
                      </option>
                    </select>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-input-box form-group-city">
                  <label htmlFor="">Thành phố bạn sinh sống</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      id="cityInput"
                      className="my-form-control"
                      placeholder="Chọn thành phố bạn sinh sống"
                      // 'defaultValue' not working here
                      // value={city !== "" ? city : selectedCity}
                      value={selectedCity ? selectedCity : userData?.city}
                      onChange={handleCityChange}
                      onFocus={() => setShowDropdown(!!selectedCity)}
                      style={{
                        border: cityError?.status ? "1px solid red" : "",
                      }}
                    />
                  )}
                  {showDropdown && (
                    <ul className="dropdown">
                      {filteredCities.map((city, index) => (
                        <li
                          className="li"
                          key={index}
                          onClick={() => handleOptionCityClick(city.name)}
                        >
                          {city.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="input-info-box mt-30">
          <div className="header">Thông tin tùy thích</div>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="my-input-box">
                  <label htmlFor="">Bạn đang là</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Nghề nghiệp của bạn"
                      defaultValue={userData?.profileDTO?.workAt}
                      style={{
                        border: workAtError?.status ? "1px solid red" : "",
                      }}
                      onChange={(event) => {
                        setUserUpdated({
                          ...userUpdated,
                          workAt: event.target.value,
                        });
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-input-box">
                  <label htmlFor="">Sở thích</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <textarea
                      name=""
                      className="textarea-profile"
                      placeholder="Sở thích của bạn"
                      style={{
                        color: "white !important",
                        border: hobbiesError?.status ? "1px solid red" : "",
                      }}
                      defaultValue={userData?.profileDTO?.hobbies}
                      onChange={(event) => {
                        setUserUpdated({
                          ...userUpdated,
                          hobbies: event.target.value,
                        });
                      }}
                    ></textarea>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-input-box">
                  <label htmlFor="">Giới thiệu bản thân</label>
                  {loading ? (
                    <Skeleton.Input
                      active
                      block={true}
                      size="large"
                      style={{ height: "60px" }}
                    />
                  ) : (
                    <textarea
                      name=""
                      className="textarea-profile"
                      placeholder="Viết một chút mô tả về bạn..."
                      style={{
                        color: "white !important",
                        border: hobbiesError?.status ? "1px solid red" : "",
                      }}
                      defaultValue={userData?.profileDTO?.intro}
                      onChange={(event) => {
                        setUserUpdated({
                          ...userUpdated,
                          intro: event.target.value,
                        });
                      }}
                    ></textarea>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons  mt-30">
          <button type="submit" className="custom-button">
            Lưu thay đổi
          </button>
          <button className="custom-button2">Xóa thay đổi</button>
        </div>
      </form>
    </>
  );
}

const AvatarLoading = () => {
  return (
    <>
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </>
  );
};
