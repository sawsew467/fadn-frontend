import { Switch } from "antd";
export default function Notifications() {
  return (
    <>
      <div className="page-title">Thông báo</div>
      <div className="input-info-box mt-30">
        <div className="header">Chọn thời điểm và cách thức nhận thông báo</div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="my-notification-box">
                <div className="left">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-closed-captioning"></i>
                    </div>
                    <h5>Gói đăng kí</h5>
                  </div>
                  <div className="bottom">
                    <span>
                      Thông báo cho tôi về thời hạn gói đăng kí kết thúc
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="toggle-button">
                    {/* <input type="checkbox" checked id="switch" />
                    <label htmlFor="switch">Toggle</label> */}
                    <Switch defaultChecked />;
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12 mt-20">
              <div className="my-notification-box">
                <div className="left">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-closed-captioning"></i>
                    </div>
                    <h5>Comments</h5>
                  </div>
                  <div className="bottom">
                    <span>
                      Notify me about activity from the profiles I&#39;m
                      subscribed to
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="toggle-button">
                    <Switch defaultChecked />;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-20">
              <div className="my-notification-box">
                <div className="left">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-closed-captioning"></i>
                    </div>
                    <h5>Reply to My comments</h5>
                  </div>
                  <div className="bottom">
                    <span>
                      Notify me about activity from the profiles I&#39;m
                      subscribed to
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="toggle-button">
                    <Switch defaultChecked />;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-20">
              <div className="my-notification-box">
                <div className="left">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-closed-captioning"></i>
                    </div>
                    <h5>Tags</h5>
                  </div>
                  <div className="bottom">
                    <span>
                      Notify me about activity from the profiles I&#39;m
                      subscribed to
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="toggle-button">
                    <Switch defaultChecked />;
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12 mt-20">
              <div className="my-notification-box">
                <div className="left">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-closed-captioning"></i>
                    </div>
                    <h5>Yêu cầu kết bạn</h5>
                  </div>
                  <div className="bottom">
                    <span>Thông báo cho tôi về kết bạn từ người lạ</span>
                  </div>
                </div>
                <div className="right">
                  <div className="toggle-button">
                    <Switch defaultChecked />;
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12 mt-20">
              <div className="my-notification-box">
                <div className="left">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-closed-captioning"></i>
                    </div>
                    <h5>Groups</h5>
                  </div>
                  <div className="bottom">
                    <span>
                      Notify me about activity from the profiles I&#39;m
                      subscribed to
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="toggle-button">
                    <Switch defaultChecked />;
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
