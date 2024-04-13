"use client";
/* eslint-disable @next/next/no-img-element */

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { decrement, increment } from "@/store/features/auth/tokenSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FloatButton } from "antd";

function HomePage() {
  const { value } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <>
      <FloatButton.BackTop />
      {/* ==========Banner-Section========== */}
      <section
        className="banner-section"
        style={{
          backgroundImage: "url('/pageImages/banner/hero-banner.png')",
          height: "100vh",
        }}
      >
        <Image
          src="/pageImages/banner/aimg1.png"
          alt="aimg1"
          width="476"
          height="326"
          className="img1 wow fadeInLeft"
        />
        <Image
          src="/pageImages/banner/aimg2.png"
          alt="aimg2"
          width="462"
          height="195"
          className="img2 wow fadeInRight"
        />
        <div
          className="container heading"
          // style={{
          //   marginTop: "100px",
          // }}
        >
          <div className="row">
            <div className="col-xl-7 col-lg-5">
              <h1
                className="main-title wow fadeInLeft"
                style={{ fontSize: "40px" }}
              >
                Kết nối Tình yêu
              </h1>
              <h1
                className="main-title wow fadeInLeft"
                style={{ fontSize: "40px" }}
              >
                Nơi Hẹn Hò Đích Thực
              </h1>
              {/* <div className="join-now-box wow fadeInUp">
                <div className="single-option">
                  <p className="title">I am a :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <input type="radio" name="gender" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="single-option gender">
                  <p className="title">Seeking a :</p>
                  <div className="option">
                    <div className="s-input mr-4">
                      <input type="radio" name="seeking" id="males" />
                      <label htmlFor="males">Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="seeking" id="females" />
                      <label htmlFor="females">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="single-option age">
                  <p className="title">Ages :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <select className="select-bar">
                        <option value="">18</option>
                        <option value="">20</option>
                        <option value="">24</option>
                      </select>
                    </div>
                    <div className="separator">-</div>
                    <div className="s-input ml-3">
                      <select className="select-bar">
                        <option value="">30</option>
                        <option value="">35</option>
                        <option value="">40</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="single-option last">
                  <p className="title">Country :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <select className="select-bar">
                        <option>Select Country</option>
                        <option value="">VietNam</option>
                        <option value="">USA</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="joun-button">
                  <button
                    className="custom-button"
                    onClick={() => router.push("/login")}
                  >
                    Join Now!
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}

      {/* ==========Feature-Section========== */}
      <section className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icon">
                  <img src="/pageImages/feature/icon01.png" alt="" />
                </div>
                <h4>Xác minh</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon">
                  <img src="/pageImages/feature/icon02.png" alt="" />
                </div>
                <h4>An toàn</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <img src="/pageImages/feature/icon03.png" alt="" />
                </div>
                <h4>Quyền riêng tư</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon">
                  <img src="/pageImages/feature/icon04.png" alt="" />
                </div>
                <h4>Kết đôi thông minh</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Feature-Section========== */}

      {/* ==========Start-Flirting-Section========== */}
      <section className="flirting-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Cùng gặp gỡ một nửa của mình!
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Bắt đầu hẹn hò
                  </h2>
                  <p>
                    Trong thời đại hiện đại, các ứng dụng hẹn hò đã trở thành
                    một phần không thể thiếu trong cuộc sống của chúng ta. Chúng
                    cho phép bạn kiểm tra hồ sơ của những người độc thân sống
                    gần bạn, trò chuyện với họ, gặp gỡ họ và có thể yêu nhau.
                  </p>
                  <br />
                  <p>
                    Nếu bạn đang tìm kiếm một ứng dụng hẹn hò đơn giản với các
                    tính năng miễn phí cho phép gặp gỡ những người độc thân thì
                    bạn sẽ có được CUPID DATING. Với CUPID DATING, bạn sẽ có
                    được tất cả những gì mình cần từ một ứng dụng hẹn hò trên
                    thiết bị di động, mang đến cho bạn hàng nghìn người dùng
                    thông qua trang web của bạn với trải nghiệm rất thú vị.
                  </p>
                </div>

                <Link
                  href="/login"
                  className="custom-button"
                  style={{ textDecoration: "none" }}
                >
                  Tìm kiếm một nửa của bạn
                </Link>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img">
                <img
                  className="bg-shape"
                  src="/pageImages/flirting/circle.png"
                  alt=""
                />
                <img src="/pageImages/flirting/illutration.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Start-Flirting-Section========== */}

      {/* ==========How it work Section========== */}
      <section
        className="how-it-work-section"
        style={{ backgroundImage: "url('/pageImages/h-it-w/bg-img.jpg')" }}
      >
        <img
          className="shape1"
          src="/pageImages/h-it-w/circle-shape.png"
          alt=""
        />
        <img className="shape2" src="/pageImages/h-it-w/bird.png" alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Gặp gỡ những người mới ngay hôm nay!
                  </h6>
                  <h2 className="title wow fadeInUp">
                    Ứng dụng hoạt động như thế nào?
                  </h2>
                  <p className="text wow fadeInUp">
                    Bạn chỉ còn 3 bước nữa là có một cuộc hẹn hò tuyệt vời đó{" "}
                    <i
                      className="fa-solid fa-heart"
                      style={{ color: "red" }}
                    ></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-box wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ height: "423px" }}
              >
                <div className="icon">
                  <img src="/pageImages/h-it-w/icon1.png" alt="" />
                  <div className="number">01</div>
                </div>
                <h4 className="title" style={{ height: "68px" }}>
                  Hãy cho chúng tôi biết bạn là ai!
                </h4>
                <Link
                  className="custom-button"
                  href="/login"
                  style={{ textDecoration: "none", marginTop: "15px" }}
                >
                  Tham gia!
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-box wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ height: "423px" }}
              >
                <div className="icon">
                  <img src="/pageImages/h-it-w/icon2.png" alt="" />
                  <div className="number">02</div>
                </div>
                <h4 className="title" style={{ height: "68px" }}>
                  Tìm người phù hợp
                </h4>
                <Link
                  href="/login"
                  style={{ textDecoration: "none", marginTop: "15px" }}
                  className="custom-button"
                >
                  Tham gia!
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-box wow fadeInUp"
                data-wow-delay="0.3s"
                style={{ height: "423px" }}
              >
                <div className="icon">
                  <img src="/pageImages/h-it-w/icon3.png" alt="" />
                  <div className="number">03</div>
                </div>
                <h4
                  className="title"
                  style={{ height: "68px", marginTop: "15px" }}
                >
                  Bắt đầu hẹn hò
                </h4>
                <Link
                  href="/login"
                  style={{ textDecoration: "none" }}
                  className="custom-button"
                >
                  Tham gia!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========How it work Section========== */}

      {/* ==========Statistics-Section========== */}
      {/* <section className="statistics-section">
        <div className="container">
          <div className="statistics-wrapper">
            <div className="row mb--20">
              <div className="col-md-4 col-sm-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.1s">
                  <div className="icon">
                    <img src="/pageImages/statistics/stat01.png" alt="" />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final="350">
                        99
                      </span>
                      M
                    </h3>
                    <span className="info">Tickets Booked</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <img src="/pageImages/statistics/stat02.png" alt="" />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final="447">
                        99
                      </span>
                      M
                    </h3>
                    <span className="info">Usefull Sessions</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="icon">
                    <img src="/pageImages/statistics/stat03.png" alt="" />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final="60">
                        99
                      </span>
                      M
                    </h3>
                    <span className="info">Talented Speakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ==========Statistics-Section========== */}

      {/* ==========Join-now-Section========== */}
      <section className="join-now-section">
        <img className="shape1" src="/pageImages/join/heartshape.png" alt="" />
        <img className="shape2" src="/pageImages/join/img.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header white-color">
                  <h2 className="title wow fadeInUp">
                    Cách tốt nhất để tìm người bạn đời duy nhất thực sự của bạn!
                  </h2>
                </div>

                <Link
                  href="/login"
                  style={{ textDecoration: "none" }}
                  className="custom-button"
                >
                  Tham gia!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Join-now-Section========== */}

      {/* ==========Features-Section========== */}
      <section className="feature-section extra-feature">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title wow fadeInUp">
                    Một danh sách đầy đủ
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Tính năng tuyệt vời
                  </h2>
                  <p className="text">
                    Để tìm thấy những kết nối, cuộc hẹn hò và bạn đời có ý
                    nghĩa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-area">
          <div
            className="left-image"
            style={{
              backgroundImage: "url('/pageImages/feature/left-img-2.jpg')",
            }}
          >
            <div className="offer">
              <div className="offer-inner-content">
                <span className="fs">Bắt đầu với</span>
                <h2 style={{ fontSize: "35px" }}>Miễn phí</h2>
                <span className="ss">7 ngày dùng thử</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="feature-lists">
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon">
                      <img src="/pageImages/feature/i1.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Đơn giản để sử dụng</h4>
                      <p>
                        Các bước đơn giản cần làm theo để có kết nối phù hợp.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <img src="/pageImages/feature/i2.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Kết đôi thông minh</h4>
                      <p>
                        Cách kết nối thông minh mà dễ dàng để tạo ra một sự phù
                        hợp.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <img src="/pageImages/feature/i3.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Filter very fast</h4>
                      <p>
                        Sử dụng bộ lọc để tìm kiếm một cách nhanh chóng và dễ
                        dàng hơn.
                      </p>
                    </div>
                  </div>
                  {/* <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <img src="/pageImages/feature/i4.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Cool community</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Features-Section========== */}

      {/* ==========Latest-Registered-Section========== */}
      {/* <section className="latest-registered-section">
        <img className="shape" src="/pageImages/registered/shape.png" alt="" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Latest Registered
                  </h6>
                  <h2 className="title wow fadeInUp">Members</h2>
                  <p className="text">
                    if you have been looking for the someone special of your
                    life for long, then your search ends here
                  </p>
                </div>
                <Link
                  href="/login"
                  style={{ textDecoration: "none" }}
                  className="custom-button"
                >
                  Join Now !
                </Link>
              </div>
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="registered-slider owl-carousel">
                <div className="single-slider">
                  <div className="img">
                    <img src="/pageImages/registered/p1.png" alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/pageImages/registered/p1.png" alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/pageImages/registered/p1.png" alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ==========Latest-Registered-Section========== */}

      {/* ==========Success-Stories-Section========== */}
      {/* <section className="sucess-stories-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title wow fadeInUp">Love in faith</h6>
                  <h2 className="title wow fadeInUp">Success Stories</h2>
                  <p className="text wow fadeInUp">
                    Aliquam a neque tortor. Donec iaculis auctor turpis.
                    Eporttitor mattis ullamcorper urna. Cras quis elementum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="img">
                  <img src={img1} alt="" />
                </div>
                <div className="content">
                  <div className="author">
                    <img src={successP1} alt="" />
                    <span></span>
                  </div>
                  <h4 className="title">
                    Love horoscope for Cancer There will be...
                  </h4>
                  <p className="date">December 10, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img">
                  <img src={img2} alt="" />
                </div>
                <div className="content">
                  <div className="author">
                    <img src={successP2} alt="" />
                    <span></span>
                  </div>
                  <h4 className="title">
                    ‘love at first sight’ is all about initial attraction...
                  </h4>
                  <p className="date">December 11, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="img">
                  <img src={img3} alt="" />
                </div>
                <div className="content">
                  <div className="author">
                    <img src={successP3} alt="" />
                    <span></span>
                  </div>
                  <h4 className="title">
                    What women actually want to feel on their...
                  </h4>
                  <p className="date">December 14, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ==========Success-Stories-Section========== */}
    </>
  );
}

export default HomePage;
