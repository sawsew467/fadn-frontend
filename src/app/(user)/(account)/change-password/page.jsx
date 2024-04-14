export default function ChangePassword() {
  return (
    <>
      <div className="page-title">Thay đổi mật khẩu</div>

      <div className="input-info-box mt-30">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Mật khẩu hiện tại</label>
                <input type="password" placeholder="Mật khẩu hiện tại" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Mật khẩu mới</label>
                <input type="password" placeholder="Mật khẩu mới" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Xác nhận mật khẩu mới</label>
                <input type="password" placeholder="Mật khẩu mới" />
              </div>
            </div>
            <div className="col-lg-12">
              <a href="#" style={{ textDecoration: "none" }}>
                Quên mật khẩu?
              </a>
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
