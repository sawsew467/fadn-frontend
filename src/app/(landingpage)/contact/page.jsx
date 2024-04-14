"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

function Contact() {
  return (
    <>
      {/* ==========Breadcrumb-Section========== */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Liên Hệ</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link href="/" style={{ textDecoration: "none" }}>
                  Trang chủ
                </Link>
              </li>

              <li>Liên hệ</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ==========Breadcrumb-Section========== */}

      {/* ==========Contact-Section========== */}
      <section className="contact-section">
        {/* contact/img-right.png */}
        <img
          className="img-right"
          src="/pageImages/contact/img-right.png"
          alt=""
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title">Liên hệ với chúng tôi</h6>
                  <h2 className="title">Giữ liên lạc</h2>
                  <p className="text">
                    Chúng tôi rất muốn nghe ý kiến ​​từ bạn! Hãy cho chúng tôi
                    biết chúng tôi có thể giúp gì được cho bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <div className="single-input">
                  <i className="far fa-user"></i>
                  <input type="text" placeholder="Tên của bạn" />
                </div>
                <div className="single-input">
                  <i className="far fa-envelope"></i>
                  <input type="text" placeholder="Email của bạn" />
                </div>
                <div className="single-input">
                  <i className="far fa-comments"></i>
                  <textarea placeholder="Có điều gì bạn cần nói"></textarea>
                </div>
                <button href="#" className="custom-button">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Contact-Sectionn========== */}
    </>
  );
}

export default Contact;
