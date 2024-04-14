"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

function Membership() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <>
      {/* ==========Breadcrumb-Section========== */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Thành viên trả phí</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link href="/" style={{ textDecoration: "none" }}>
                  Trang chủ
                </Link>
              </li>

              <li>Thành viên trả phí</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ==========Breadcrumb-Section========== */}

      {/* ==========Membership-Section========== */}
      <section className="membership-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding">
                    Nâng cấp hồ sơ của bạn
                  </h6>
                  <h2 className="title">Gói Thành Viên Cao Cấp</h2>
                  <p className="text">
                    Hãy hưởng lợi tối đa từ <b>CUPID DATING</b>!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-s-top">
            <div className="col-lg-4 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src="/pageImages/membership/icon1.png" alt="" />
                </div>
                <h4 className="title">Tin nhắn không giới hạn</h4>
                <p className="text">Gửi và nhận tin nhắn không giới hạn</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src="/pageImages/membership/icon2.png" alt="" />
                </div>
                <h4 className="title">Huy hiệu VIP</h4>
                <p className="text">Nhận huy hiệu VIP độc quyền</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src="/pageImages/membership/icon3.png" alt="" />
                </div>
                <h4 className="title">Ghép đôi không giới hạn</h4>
                <p className="text">
                  Cơ hội ghép đôi không giới hạn với nhiều người mới
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pricing-plan-wrapper">
                <img
                  className="left-img"
                  src="/pageImages/membership/left-img.png"
                  alt=""
                />
                <img
                  className="right-img"
                  src="/pageImages/membership/right-img.png"
                  alt=""
                />
                <div className="row">
                  <div className="col-lg-4 col-md-8">
                    <div className="single-plan">
                      <p className="duration">Basic</p>
                      <h4 className="number">
                        <sup>$</sup>10
                      </h4>
                      <p className="stamet">Per Month</p>
                      <Link
                        href="/membership/checkout"
                        className="custom-button"
                        style={{ textDecoration: "none" }}
                      >
                        Buy Now!
                      </Link>
                      <img
                        className="shape"
                        src="/pageImages/membership/plan-bg.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-8">
                    <div className="single-plan">
                      <p className="duration">Standard</p>
                      <h4 className="number">
                        <sup>$</sup>20
                      </h4>
                      <p className="stamet">Per Month</p>
                      <Link
                        href="/membership/checkout"
                        className="custom-button"
                        style={{ textDecoration: "none" }}
                      >
                        Buy Now!
                      </Link>
                      <img
                        className="shape"
                        src="/pageImages/membership/plan-bg.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-8">
                    <div className="single-plan">
                      <p className="duration">Premium</p>
                      <h4 className="number">
                        <sup>$</sup>30
                      </h4>
                      <p className="stamet">Per Month</p>
                      <Link
                        href="/membership/checkout"
                        className="custom-button"
                        style={{ textDecoration: "none" }}
                      >
                        Buy Now!
                      </Link>
                      <img
                        className="shape"
                        src="/pageImages/membership/plan-bg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-plans">
          <img
            className="shape1"
            src="/pageImages/join/heartshape.png"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="contact-link">
                  Nếu bạn cần hỗ trợ{" "}
                  <Link href="/contact-us" style={{ textDecoration: "none" }}>
                    Liên hệ chúng tôi
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Membership-Section========== */}

      {/* ==========Faq-Section========== */}
      <section className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding">
                    Có bất kỳ câu hỏi nào
                  </h6>
                  <h2 className="title">Chúng tôi đều trả lời</h2>
                  <p className="text">
                    Hãy thử kiểm tra các câu hỏi thường gặp
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-area">
            <div className="faq-wrapper">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${index === openIndex ? "active open" : ""
                    }`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="faq-title">
                    <h6 className="title">{item.question}</h6>
                    <span className="right-icon"></span>
                  </div>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ==========Faq-Section========== */}
    </>
  );
}

// Example FAQ data
const faqData = [
  {
    question: "Ứng dụng CUPID DATING là gì?",
    answer:
      "Ứng dụng CUPID DATING là một nền tảng hẹn hò trực tuyến nơi bạn có thể kết nối với những người độc đáo và tìm kiếm tình yêu đích thực của mình. Chúng tôi cung cấp một môi trường an toàn và thuận tiện để gặp gỡ và tương tác với những người phù hợp với bạn.",
  },
  {
    question: "Có những phương thức thanh toán nào?",
    answer:
      "Chúng tôi cung cấp nhiều phương thức thanh toán đa dạng như thẻ tín dụng, chuyển khoản ngân hàng và cổng thanh toán trực tuyến. Bạn có thể chọn phương thức thanh toán phù hợp với bạn khi mua gói dịch vụ trên trang web hoặc ứng dụng của chúng tôi.",
  },
  {
    question: "Cách ghép đôi của chúng tôi hoạt động như thế nào?",
    answer:
      "Cách ghép đôi của chúng tôi dựa trên các thông tin và sở thích mà bạn cung cấp trong hồ sơ cá nhân của mình. Hệ thống của chúng tôi sẽ sử dụng thuật toán thông minh để phân loại và đề xuất những người dùng phù hợp nhất với bạn. Bạn cũng có thể sử dụng các bộ lọc và tiêu chí tìm kiếm để tìm kiếm và kết nối với người dùng khác theo mong muốn của bạn.",
  },
];

{
  /* (&quot; || &ldquo; || &#34; || &rdquo;) */
}
export default Membership;
