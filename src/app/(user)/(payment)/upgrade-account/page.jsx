import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

export default function UpgradeAccount() {
  return (
    <>
      <div className="page-title">Nâng Cấp Tài Khoản</div>
      <div className="row">
        <div className="col-md-8">
          <div className="single-plan">
            <p className="duration">Basic</p>
            <h4 className="number">
              <sup>$</sup>10
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
        <div className="col-md-8">
          <div className="single-plan">
            <p className="duration">Standard</p>
            <h4 className="number">
              <sup>$</sup>20
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
        <div className="col-md-8">
          <div className="single-plan">
            <p className="duration">Premium</p>
            <h4 className="number">
              <sup>$</sup>30
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
