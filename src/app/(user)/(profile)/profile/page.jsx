"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import citiesJson from "@/components/modules/auth/SignUp/cites";

// Sample cities data
const cities = citiesJson;

export default function ProfilePage() {
  const [openPanel, setOpenPanel] = useState("collapseOne");

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
    // setCity(cityName); // set City
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

  return (
    <>
      <div className="page-title">Thông tin cá nhân</div>
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
                <img src="/pageImages/profile/profile-user.png" alt="" />
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
          {/* <div className="up-photo-card">
            <div className="icon">
              <i className="fas fa-image"></i>
            </div>
            <div className="content">
              <h4>Change Cover</h4>
              <span>1200x300p size minimum</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="input-info-box mt-30">
        <div className="header">Thông tin của bạn</div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Tên</label>
                <input type="text" placeholder="Tên của bạn" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Họ</label>
                <input type="text" placeholder="Họ của bạn" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Nickname</label>
                <input type="text" placeholder="Nickname" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email của bạn" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Số điện thoại</label>
                <input type="text" placeholder="Số điện thoại" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Giới tính</label>
                <select name="" id="">
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Phi nhị giới</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Giới tính tìm kiếm</label>
                <select name="" id="">
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Ngày sinh</label>
                <input type="date" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Tình trạng hôn nhân</label>
                <select name="" id="">
                  <option value="">Độc thân</option>
                  <option value="">Đã cưới</option>
                  <option value="">Đang trong mối quan hệ</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box form-group-city">
                <label htmlFor="">Thành phố bạn sinh sống</label>
                <input
                  type="text"
                  id="cityInput"
                  className="my-form-control"
                  placeholder="Chọn thành phố bạn sinh sống"
                  // value={city !== "" ? city : selectedCity}
                  value={selectedCity}
                  onChange={handleCityChange}
                  onFocus={() => setShowDropdown(!!selectedCity)}
                  // style={{
                  //   border: cityError?.status ? "1px solid red" : "",
                  // }}
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
                <input type="text" placeholder="Nghề nghiệp của bạn" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Sở thích</label>
                <textarea
                  name=""
                  placeholder="Sở thích của bạn"
                  style={{ color: "white" }}
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Giới thiệu bản thân</label>
                <textarea
                  name=""
                  placeholder="Viết một chút mô tả về bạn..."
                  style={{ color: "white" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="input-info-box mt-30">
        <div className="header">Jobs & Education</div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Title or Place</label>
                <input type="text" placeholder="Title or Place" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Year Started</label>
                <select name="" id="">
                  <option value="">2014</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Year End</label>
                <select name="" id="">
                  <option value="">2017</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Description</label>
                <textarea name="" id="" placeholder="Description"></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Title or Place</label>
                <input type="text" placeholder="Title or Place" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Year Started</label>
                <select name="" id="">
                  <option value="">2014</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Year End</label>
                <select name="" id="">
                  <option value="">2017</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Description</label>
                <textarea name="" id="" placeholder="Description"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="buttons  mt-30">
        <button type="submit" className="custom-button">
          Lưu thay đổi
        </button>
        <button className="custom-button2">Xóa thay đổi</button>
      </div>
    </>
  );
}
