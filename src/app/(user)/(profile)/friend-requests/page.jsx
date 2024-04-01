import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

export default function FriendRequests() {
  return (
    <>
      <div className="page-title">
        Yêu Cầu Kết Bạn
        <div className="right">
          <Link
            href="#"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            style={{ textDecoration: "none" }}
          >
            Tìm bạn
          </Link>
        </div>
      </div>
      <div className="frind-box">
        <div className="single-friend">
          <div className="left">
            <img src="/pageImages/friend-request/1.png" alt="" />
            <div className="content">
              <h5 className="name">
                May Hurt <i className="fas fa-certificate"></i>
              </h5>
              <span className="age">21 tuổi</span>
              <span className="separator"></span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Paris
              </span>
            </div>
          </div>
          <div className="right">
            <button className="accept">Chấp nhận</button>
            <button className="ignore">Từ chối</button>
          </div>
        </div>
      </div>
    </>
  );
}
