export default function DeleteAccount() {
  return (
    <>
      <div className="page-title">Xóa tài khoản</div>

      <div className="input-info-box mt-30">
        <div className="header">Cảnh báo:</div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <p>
                Nếu bạn xóa tài khoản của mình, bạn sẽ bị hủy đăng ký khỏi tất
                cả những người theo dõi và bạn bè của mình và sẽ mất quyền truy
                cập vĩnh viễn.
              </p>
              <div className="my-input-box">
                <input type="password" placeholder="Mật khẩu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons  mt-30">
        <button type="submit" className="custom-button">
          Xóa tài khoản
        </button>
      </div>
    </>
  );
}
