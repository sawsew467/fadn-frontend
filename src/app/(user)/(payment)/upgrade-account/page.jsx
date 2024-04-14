import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

export default function UpgradeAccount() {
  return (
    <>
      <div className="page-title">Nâng Cấp Tài Khoản</div>
      <div className="row">
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">1 Month</p>
            <h4 className="number">
              <sup>$</sup>2.99
            </h4>
            <p className="stamet">Per Month</p>
            <Link
              style={{ textDecoration: "none" }}
              href="/checkout"
              className="custom-button"
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
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">3 Month</p>
            <h4 className="number">
              <sup>$</sup>4.99
            </h4>
            <p className="stamet">Per Month</p>
            <Link
              style={{ textDecoration: "none" }}
              href="/checkout"
              className="custom-button"
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
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">6 Month</p>
            <h4 className="number">
              <sup>$</sup>5.99
            </h4>
            <p className="stamet">Per Month</p>
            <Link
              style={{ textDecoration: "none" }}
              href="/checkout"
              className="custom-button"
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
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">12 Month</p>
            <h4 className="number">
              <sup>$</sup>7.99
            </h4>
            <p className="stamet">Per Month</p>
            <Link
              style={{ textDecoration: "none" }}
              href="/checkout"
              className="custom-button"
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
    </>
  );
}
