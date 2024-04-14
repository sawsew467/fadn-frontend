export default function PrivacySettings() {
  return (
    <>
      <div className="page-title">Cài Đặt Quyền Riêng Tư</div>

      <div className="input-info-box mt-30">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                <b>Ai có thể xem thông tin của tôi?</b>
              </p>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <select name="" id="">
                  <option value="">Mọi người (Public)</option>
                  <option value="">Chỉ bạn bè</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                <b>Ai có thể gửi cho tôi lời mời kết bạn?</b>
              </p>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <select name="" id="">
                  <option value="">Mọi người (Public)</option>
                  <option value="">Chỉ bạn bè</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                <b>Ai có thể xem hoạt động của tôi?</b>
              </p>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <select name="" id="">
                  <option value="">Mọi người (Public)</option>
                  <option value="">Chỉ bạn bè</option>
                </select>
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
    </>
  );
}
