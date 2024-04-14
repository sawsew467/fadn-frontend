export default function PurchaseHistory() {
  return (
    <>
      <div className="page-title">Gói Đăng Kí & Lịch Sử Mua Hàng</div>

      <div className="input-info-box mt-30">
        <div className="my-table">
          <div className="table-filter">
            <div className="row">
              <div className="col-md-4">
                <div className="my-input-box">
                  <label htmlFor="">Từ ngày</label>
                  <input type="date" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="my-input-box">
                  <label htmlFor="">Đến ngày</label>
                  <input type="date" />
                </div>
              </div>
              <div className="col-md-4">
                <button className="custom-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>NGÀY</th>
                  <th>GÓI ĐĂNG KÍ</th>
                  <th>TÌNH TRẠNG</th>
                  <th>CODE</th>
                  <th>GIÁ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="gray">Nov 15th, 2021</td>
                  <td className="green">Subscriptions Plan</td>
                  <td className="dark">Purchase</td>
                  <td className="gray">VK1287</td>
                  <td className="dark">$34</td>
                </tr>
                <tr>
                  <td className="gray">Nov 15th, 2021</td>
                  <td className="green">Subscriptions Plan</td>
                  <td className="dark">Purchase</td>
                  <td className="gray">VK1287</td>
                  <td className="dark">$34</td>
                </tr>
                <tr>
                  <td className="gray">Nov 15th, 2021</td>
                  <td className="green">Subscriptions Plan</td>
                  <td className="dark">Purchase</td>
                  <td className="gray">VK1287</td>
                  <td className="dark">$34</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
