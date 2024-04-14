import Link from "next/link";
import { usePathname } from "next/navigation";
export default function BreadcrumbUser() {
  const pathname = usePathname();
  const paths = [
    "/profile",
    "/notifications",
    "/friend-requests",
    "/change-password",
    "/delete-account",
    "/privacy-settings",
    "/verified-account",
    "/upgrade-account",
    "/purchase-history",
  ];
  const formatPath = (path) => {
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, " ");
  };
  // Hàm chuyển đổi từ tiếng Anh sang tiếng Việt
  const convertToVietnamese = (englishString) => {
    const dictionary = {
      profile: "Thông tin cá nhân",
      notifications: "Thông báo",
      "friend-requests": "Yêu cầu kết bạn",
      "change-password": "Thay đổi mật khẩu",
      "delete-account": "Xóa tài khoản",
      "privacy-settings": "Cài đặt quyền riêng tư",
      "verified-account": "Tài khoản đã xác minh",
      "upgrade-account": "Nâng cấp tài khoản",
      "purchase-history": "Lịch sử mua hàng",
    };
    return dictionary[englishString];
  };
  return (
    <>
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Tài khoản</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link href="/" style={{ textDecoration: "none" }}>
                  Trang chủ
                </Link>
              </li>

              <li>
                {paths.map((item, index) => {
                  if (pathname === item)
                    return convertToVietnamese(item.substring(1));
                  {
                    /* if (pathname === item) return formatPath(item); */
                  }
                })}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
