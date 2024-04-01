import { useState, useEffect } from "react";
import { Popover } from "antd";
import citiesJson from "./cites.js";

// Sample cities data
const cities = citiesJson;

const content = (
  <div>
    <p style={{ color: "black" }}>
      <i className="fa-solid fa-circle-info"></i> Sử dụng khi bạn không muốn
      hiển thị tên thật của bạn cho bất cứ ai.
    </p>
  </div>
);

export default function ProfileDetails({
  firstname,
  setFirstname,
  lastname,
  setLastname,
  nickname,
  setNickname,
  phone,
  setPhone,
  birthday,
  setBirthday,
  gender,
  setGender,
  genderLookingFor,
  setGenderLookingFor,
  status,
  setStatus,
  city,
  setCity,
  firstnameError,
  setFirstnameError,
  lastnameError,
  setLastnameError,
  nicknameError,
  setNicknameError,
  phoneError,
  setPhoneError,
  birthdayError,
  setBirthdayError,
  genderError,
  setGenderError,
  genderLookingForError,
  setGenderLookingForError,
  statusError,
  setStatusError,
  cityError,
  setCityError,
  handleFirstNameChange,
  handleLastNameChange,
  handleNickNameChange,
  handlePhoneChange,
  handleBirthdayChange,
  handleGenderChange,
  handleGenderLookingForChange,
}) {
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
    setCity(cityName); // set City
    setCityError({
      status: false,
      message: "",
    });
    setSelectedCity(cityName);
    setShowDropdown(false);
  }

  return (
    <>
      <h4 className="content-title">Thông tin cá nhân</h4>
      <div className="form-group">
        <label
          htmlFor=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Tên của bạn<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="my-form-control"
          placeholder="Tên của bạn"
          onChange={handleFirstNameChange}
          value={firstname}
          style={{
            border: firstnameError?.status ? "1px solid red" : "",
          }}
        />
        {firstnameError?.status && (
          <p style={{ color: "red" }}>{firstnameError?.message}</p>
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
          Họ của bạn<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="my-form-control"
          placeholder="Họ của bạn"
          onChange={handleLastNameChange}
          value={lastname}
          style={{
            border: lastnameError?.status ? "1px solid red" : "",
          }}
        />
        {lastnameError?.status && (
          <p style={{ color: "red" }}>{lastnameError?.message}</p>
        )}
      </div>
      <div className="form-group">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">
            Nickname
            <Popover
              content={content}
              // title="Title"
              trigger="hover"
            >
              <i
                className="fa-solid fa-circle-question"
                style={{
                  fontSize: "15px",
                  color: "gray",
                  marginLeft: "10px",
                }}
              ></i>
            </Popover>
          </label>
          <span style={{ color: "red" }}>*</span>
        </div>
        <input
          type="text"
          className="my-form-control"
          placeholder="Nickname của bạn"
          onChange={handleNickNameChange}
          value={nickname}
          style={{
            border: nicknameError?.status ? "1px solid red" : "",
          }}
        />
        {nicknameError?.status && (
          <p style={{ color: "red" }}>{nicknameError?.message}</p>
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
          Số Điện Thoại<span style={{ color: "red" }}>*</span>
        </label>
        <input
          // type="number"
          className="my-form-control"
          placeholder="Số điện thoại"
          onChange={handlePhoneChange}
          value={phone}
          style={{
            border: phoneError?.status ? "1px solid red" : "",
          }}
        />
        {phoneError?.status && (
          <p style={{ color: "red" }}>{phoneError?.message}</p>
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
          Ngày sinh<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="date"
          className="my-form-control"
          value={birthday}
          onChange={handleBirthdayChange}
          style={{
            border: birthdayError?.status ? "1px solid red" : "",
          }}
        />
        {birthdayError?.status && (
          <p style={{ color: "red" }}>{birthdayError?.message}</p>
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
          Giới tính của bạn<span style={{ color: "red" }}>*</span>
        </label>
        <div
          className="option"
          style={{
            border: genderError?.status ? "1px solid red" : "",
          }}
        >
          <div className="s-input mr-3">
            <input
              type="radio"
              name="gender"
              id="male"
              value="1"
              onChange={handleGenderChange}
              checked={gender === "1"}
            />
            <label htmlFor="male">Nam</label>
          </div>
          <div className="s-input mr-3">
            <input
              type="radio"
              name="gender"
              id="female"
              value="2"
              onChange={handleGenderChange}
              checked={gender === "2"}
            />
            <label htmlFor="female">Nữ</label>
          </div>
          <div className="s-input">
            <input
              type="radio"
              name="gender"
              id="non-binary"
              value="3"
              onChange={handleGenderChange}
              checked={gender === "3"}
            />
            <label htmlFor="non-binary">Phi nhị giới</label>
          </div>
        </div>
        {genderError?.status && (
          <p style={{ color: "red" }}>{genderError?.message}</p>
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
          Đang tìm kiếm đối tượng<span style={{ color: "red" }}>*</span>
        </label>
        <div
          className="option"
          style={{
            border: genderLookingForError?.status ? "1px solid red" : "",
          }}
        >
          <div className="s-input mr-3">
            <input
              type="radio"
              name="genderLookingFor"
              id="maleLookingFor"
              value="1"
              onChange={handleGenderLookingForChange}
              checked={genderLookingFor === "1"}
            />
            <label htmlFor="maleLookingFor">Nam</label>
          </div>
          <div className="s-input">
            <input
              type="radio"
              name="genderLookingFor"
              id="femaleLookingFor"
              value="2"
              onChange={handleGenderLookingForChange}
              checked={genderLookingFor === "2"}
            />
            <label htmlFor="femaleLookingFor">Nữ</label>
          </div>
        </div>
        {genderLookingForError?.status && (
          <p style={{ color: "red" }}>{genderLookingForError?.message}</p>
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
          Tình trạng hôn nhân<span style={{ color: "red" }}>*</span>
        </label>
        <div
          className="option"
          style={{
            border: statusError?.status ? "1px solid red" : "",
          }}
        >
          <div className="s-input nice-select-wraper">
            <select
              className="select-bar"
              style={{
                color: "#fff",
                backgroundColor: "#262950",
                padding: "0 30px",
                border: "none",
              }}
              value={status !== "" ? status : "2"}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value={"2"}>Độc thân</option>
              <option value={"1"}>Đã kết hôn</option>
            </select>
          </div>
        </div>
        {statusError?.status && (
          <p style={{ color: "red" }}>{statusError?.message}</p>
        )}
      </div>
      <div className="form-group form-group-city">
        <label
          htmlFor="cityInput"
          className="label"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Thành phố<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          id="cityInput"
          className="my-form-control"
          placeholder="Chọn thành phố bạn sinh sống"
          value={city !== "" ? city : selectedCity}
          onChange={handleCityChange}
          onFocus={() => setShowDropdown(!!selectedCity)}
          style={{
            border: cityError?.status ? "1px solid red" : "",
          }}
        />
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
        {cityError?.status && (
          <p style={{ color: "red" }}>{cityError?.message}</p>
        )}
      </div>
    </>
  );
}
