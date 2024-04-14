"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from 'antd';
import { Dropdown, Space } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './Membership.css';

function Checkout() {
    const [users, setUsers] = useState([]);

    const handleUpdateRole = async (userId, roleId, roleName) => {
        try {
            const res = await fetch(`http://localhost:8088/api/v1/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTMwODAwNTQsImV4cCI6MTcxMzE2NjQ1NH0.QiFHv9tB6kWOwqPICmmQBBrfwaNG2_6pfTsd7N8stdMwvYpa7srXB9qcY9H8WSLd'
                },
                body: JSON.stringify({ roleDTO: { id: roleId, name: roleName } })
            });

            if (res.ok) {
                console.log('Role updated successfully');
                // Fetch updated user data or update state as needed
            } else {
                console.error('Error updating role:', res.status);
            }
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (packageInfo) => {
        const updatedPackageInfo = {
            ...packageInfo,
        };
        setSelectedPackage(updatedPackageInfo);
    };


    const handleItemClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const [paymentStatus, setPaymentStatus] = useState(null);

    const handleCheckPayment = async () => {
        try {
            const { transactionId, packageID, userId } = selectedPackage;
            console.log('transactionId:', transactionId);
            console.log('packageID:', packageID);
            console.log('userId:', userId);

            const res = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=gu0rvWkjRiBz7aHxAG-t0uugWwE7Ip96RNCk04RhIsQ8qVY125kNFgludh_t2LQHYAX-iq9ghLAK190GqY5o9yWa-3ENvbeYm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP8r1i41gogCMRogJ02gGOAEdNA7yNbahg9KAxltZVNr-2qpx41piAgpIUr6JiB7XI3HJzXPyBIPaQpJO81SUuLyN-I1pD1G-A&lib=MMU0zSUGcEptCk2FOruXqY9Sg-WSom66q");
            const data = await res.json();
            const lastPaid = data.data[data.data.length - 1];
            const lastTransactionId = lastPaid["Mô tả"];

            console.log('lastTransactionId:', lastTransactionId);

            if (lastTransactionId.includes(transactionId)) {
                switch (packageID) {
                    case "PACKAGE001":
                        alert("Thanh toán thành công");
                        setPaymentStatus(<CheckCircleOutlined className="check-circle" style={{ color: "green" }} />);
                        handleUpdateRole(userId, "2", "PREMIUM");
                        break;
                    case "PACKAGE002":
                        alert("Thanh toán thành công");
                        setPaymentStatus(<CheckCircleOutlined className="check-circle" style={{ color: "green" }} />);
                        handleUpdateRole(userId, "2", "PREMIUM");
                        break;
                    case "PACKAGE003":
                        alert("Thanh toán thành công");
                        setPaymentStatus(<CheckCircleOutlined className="check-circle" style={{ color: "green" }} />);
                        handleUpdateRole(userId, "2", "PREMIUM");
                        break;
                    default:
                        alert("Thanh toán thành công");
                }
            } else {
                alert("Thanh toán không thành công");
                setPaymentStatus(<CloseCircleOutlined className="close-circle" style={{ color: "red" }} />);
                console.log("Thanh toán không thành công");
            }
        } catch (error) {
            console.log("Lỗi khi kiểm tra thanh toán:", error);
        }
    };
    return (
        <>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">Thành viên trả phí</h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <Link href="/" style={{ textDecoration: "none" }}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li>Thành viên trả phí</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ==========Breadcrumb-Section========== */}

            {/* ==========Membership-Section========== */}
            <section className="membership-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title extra-padding">
                                        Nâng cấp hồ sơ của bạn
                                    </h6>
                                    <h2 className="title">Gói Thành Viên Cao Cấp</h2>
                                    <p className="text">
                                        Hãy hưởng lợi tối đa từ <b>CUPID DATING</b>!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-s-top">
                        <div className="col-lg-4 col-md-6">
                            <div className="plan-info">
                                <div className="icon">
                                    <img src="/pageImages/membership/icon1.png" alt="" />
                                </div>
                                <h4 className="title">Tin nhắn không giới hạn</h4>
                                <p className="text">Gửi và nhận tin nhắn không giới hạn</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="plan-info">
                                <div className="icon">
                                    <img src="/pageImages/membership/icon2.png" alt="" />
                                </div>
                                <h4 className="title">Huy hiệu VIP</h4>
                                <p className="text">Nhận huy hiệu VIP độc quyền</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="plan-info">
                                <div className="icon">
                                    <img src="/pageImages/membership/icon3.png" alt="" />
                                </div>
                                <h4 className="title">Ghép đôi không giới hạn</h4>
                                <p className="text">
                                    Cơ hội ghép đôi không giới hạn với nhiều người mới
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-plan-wrapper">
                                <img
                                    className="left-img"
                                    src="/pageImages/membership/left-img.png"
                                    alt=""
                                />
                                <img
                                    className="right-img"
                                    src="/pageImages/membership/right-img.png"
                                    alt=""
                                />
                                <div className="package_wrapper">
                                    <div className="package_inner">
                                        {packages.map((item) => (
                                            <div className="package_item" key={item.packageID}>
                                                <p>{item.packageName}</p>
                                                <p>{item.packagePrice}</p>
                                                <Button
                                                    style={{
                                                        background: 'linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%)',
                                                        color: 'white',
                                                        display: 'block',
                                                        borderRadius: '10px',
                                                        textAlign: 'center',
                                                        fontSize: '15px',
                                                        fontWeight: 'bold',
                                                    }}
                                                    onClick={() => handleClick(item)}
                                                >
                                                    Mua
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                    {selectedPackage && (
                                        <div className="package_qr">
                                            <img src={selectedPackage.packageQR} style={{ margin: '1rem', width: '17rem' }} />
                                            <p>Mã giao dịch: {selectedPackage.transactionId}</p>
                                            <p>Số tiền: {selectedPackage.packagePrice}</p>
                                            <Button
                                                style={{
                                                    background: 'linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%)',
                                                    color: 'white',
                                                    display: 'block',
                                                    borderRadius: '25px',
                                                    textAlign: 'center',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    padding: '8px 16px',
                                                    width: '120px',
                                                    margin: '0 auto',
                                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                    border: 'none',
                                                }}
                                                onClick={handleCheckPayment}
                                            >
                                                Kiểm tra
                                            </Button>
                                            {paymentStatus && <div>{paymentStatus}</div>}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-plans">
                    <img
                        className="shape1"
                        src="/pageImages/join/heartshape.png"
                        alt=""
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <a></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Membership-Section========== */}

            {/* ==========Faq-Section========== */}
            <section className="faq-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title extra-padding">
                                        Có bất kỳ câu hỏi nào
                                    </h6>
                                    <h2 className="title">Chúng tôi đều trả lời</h2>
                                    <p className="text">
                                        Hãy thử kiểm tra các câu hỏi thường gặp
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-area">
                        <div className="faq-wrapper">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${index === openIndex ? "active open" : ""
                                        }`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <div className="faq-title">
                                        <h6 className="title">{item.question}</h6>
                                        <span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Faq-Section========== */}
        </>
    );
}

// Example FAQ data
const faqData = [
    {
        question: "Ứng dụng CUPID DATING là gì?",
        answer:
            "Ứng dụng CUPID DATING là một nền tảng hẹn hò trực tuyến nơi bạn có thể kết nối với những người độc đáo và tìm kiếm tình yêu đích thực của mình. Chúng tôi cung cấp một môi trường an toàn và thuận tiện để gặp gỡ và tương tác với những người phù hợp với bạn.",
    },
    {
        question: "Có những phương thức thanh toán nào?",
        answer:
            "Chúng tôi cung cấp nhiều phương thức thanh toán đa dạng như thẻ tín dụng, chuyển khoản ngân hàng và cổng thanh toán trực tuyến. Bạn có thể chọn phương thức thanh toán phù hợp với bạn khi mua gói dịch vụ trên trang web hoặc ứng dụng của chúng tôi.",
    },
    {
        question: "Cách ghép đôi của chúng tôi hoạt động như thế nào?",
        answer:
            "Cách ghép đôi của chúng tôi dựa trên các thông tin và sở thích mà bạn cung cấp trong hồ sơ cá nhân của mình. Hệ thống của chúng tôi sẽ sử dụng thuật toán thông minh để phân loại và đề xuất những người dùng phù hợp nhất với bạn. Bạn cũng có thể sử dụng các bộ lọc và tiêu chí tìm kiếm để tìm kiếm và kết nối với người dùng khác theo mong muốn của bạn.",
    },
];

const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
};

const randomNumber = generateRandomNumber();

const packages = [
    {
        packageID: "PACKAGE001",
        packageName: "Basic Package",
        packagePrice: "10$",
        transactionId: `PACKAGE001${randomNumber}`,
        packageQR: `https://img.vietqr.io/image/VietinBank-109875050449-qr_only.png?amount=10000&addInfo=${encodeURIComponent(`PACKAGE001-${randomNumber}`)}`,
    },
    {
        packageID: "PACKAGE002",
        packageName: "Standard Package",
        packagePrice: "20$",
        transactionId: `PACKAGE002${randomNumber}`,
        packageQR: `https://img.vietqr.io/image/VietinBank-109875050449-qr_only.png?amount=20000&addInfo=${encodeURIComponent(`PACKAGE002-${randomNumber}`)}`,
    },
    {
        packageID: "PACKAGE003",
        packageName: "Premium Package",
        packagePrice: "30$",
        transactionId: `PACKAGE003${randomNumber}`,
        packageQR: `https://img.vietqr.io/image/VietinBank-109875050449-qr_only.png?amount=30000&addInfo=${encodeURIComponent(`PACKAGE003-${randomNumber}`)}`,
    },
];
export default Checkout;
