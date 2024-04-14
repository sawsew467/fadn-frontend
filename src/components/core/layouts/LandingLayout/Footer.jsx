import Image from "next/image";
import Link from "next/link";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/magnific-popup.css";
import "@/styles/css/odometer.css";
import "@/styles/css/owl.carousel.min.css";
import "@/styles/css/owl.theme.default.min.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/main.css";
import "@/styles/css/responsive.css";
import "@/styles/css/dark.css";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <Image
          src="/pageImages/footer/f-shape.png"
          alt="f-shape"
          width="1920"
          height="220"
          className="shape1"
        />
        <Image
          src="/pageImages/footer/flower01.png"
          alt="flower01"
          width="320"
          height="466"
          className="shape2"
        />
        <Image
          src="/pageImages/footer/right-shape.png"
          alt="right-shape"
          width="423"
          height="302"
          className="shape3"
        />
        <div className="newslater-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="newslater-container">
                  <div className="newslater-wrapper">
                    <div className="icon">
                      <Image
                        src="/pageImages/footer/n-icon.png"
                        alt="n-icon"
                        width="86"
                        height="76"
                      />
                    </div>
                    <p className="text">
                      Đăng ký để nhận email hàng tháng về tin tức mới nhất!
                    </p>
                    <form className="newslater-form">
                      <input type="text" placeholder="Your Email Address" />
                      <button type="submit">
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            <div className="row">
              <div className="col-lg-12">
                <hr className="hr" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper one">
                  <h4 className="f-l-title">Thông tin của chúng tôi</h4>
                  <ul className="f-solial-links">
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Về chúng
                        tôi
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Liên hệ
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Phản hồi
                        khách hàng
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper two">
                  <h4 className="f-l-title">Tài khoản của tôi</h4>
                  <ul className="f-solial-links">
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Quản lí
                        tài khoản
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> An toàn &
                        An ninh
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Cấp độ
                        thành viên
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper three">
                  <h4 className="f-l-title">Trung tâm hỗ trợ</h4>
                  <ul className="f-solial-links">
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Hỗ trợ
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper four">
                  <h4 className="f-l-title">Hợp pháp</h4>
                  <ul className="f-solial-links">
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Chính sách
                        bảo mật
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Thỏa thuận
                        người dùng
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Chính sách
                        hoàn tiền
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Chính sách
                        truy cập lưu trữ
                      </Link>
                    </li>
                    <li>
                      <Link href="#" style={{ textDecoration: "none" }}>
                        <i className="fas fa-angle-double-right"></i> Báo cáo
                        lạm dụng
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <hr className="hr2" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="copyr-text">
                  <span>Copyright © 2024. All Rights Reserved By </span>
                  <Link href="#">FA - JA06 Team</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="footer-social-links">
                  <li>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
