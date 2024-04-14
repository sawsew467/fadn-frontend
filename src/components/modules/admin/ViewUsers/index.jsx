"use client"
import React from 'react';
import { Breadcrumb } from 'antd';
import { useState, useEffect } from 'react';
import { Space, Table, Modal, Button } from 'antd';
import Link from 'next/link';



export default function Users() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState([]);

    const deleteUser = async () => {
        const TOKEN = localStorage.getItem("token");
        // const userId = localStorage.getItem("userId");

        try {
            const res = await fetch(`http://localhost:8088/api/v1/users/` + userId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + TOKEN
                }
            });

            if (res.ok) {
                console.log('Xóa người dùng thành công');
                fetchUsers();
            } else {
                console.error('Xóa người dùng không thành công');
            }
        } catch (error) {
            console.error('Xóa người dùng không thành công', error);
        }
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:8088/api/v1/users', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTMwOTk0MzEsImV4cCI6MTcxMzE4NTgzMX0.h4F1gVuGAxUgIh0CdXCCw0U-UvuexexnO_lI2RILleS-nLSv_yOsflNnFj8l_2zn'
                    }
                });
                const data = await res.json()
                setUsers(data);
            } catch (error) {
                console.error('Fetch dữ liệu không thành công', error);
            }
        };

        // try {
        //     const res = await fetch(`http://localhost:8088/api/v1/users/` + userId, {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTMwOTk0MzEsImV4cCI6MTcxMzE4NTgzMX0.h4F1gVuGAxUgIh0CdXCCw0U-UvuexexnO_lI2RILleS-nLSv_yOsflNnFj8l_2zn'
        //         }
        //     });

        //     // const result = await res.json();
        //     console.log(res);

        //     if (res?.ok) {
        //         console.log('Xóa người dùng thành công');
        //         fetchUsers();
        //     } else {
        //         console.error('Xóa người dùng không thành công');
        //     }
        // } catch (error) {
        //     console.error('Xóa người dùng không thành công', error);
        // }
    };


    useEffect(() => {
        (async () => {
            const TOKEN = localStorage.getItem("token");
            const res = await fetch('http://localhost:8088/api/v1/users', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer' + TOKEN
                }
            })
            const data = await res.json()
            console.log(data);
            setUsers(data);
        })();
    }, []);

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
            deleteUser();
        }, 1000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };



    const columns = [
        // {
        //     title: 'Avatar',
        //     dataIndex: 'avatar',
        //     key: 'avatar',
        // },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                setUserId(record.key);
                return (
                    <>
                        <Button type="primary" danger onClick={showModal}>
                            Xóa
                        </Button>
                        <Modal
                            open={open}
                            title="Xóa"
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Cancel
                                </Button>,
                                <Button key="submit" type="primary" danger loading={loading} onClick={handleOk}>
                                    Xóa
                                </Button>,

                            ]}
                        >
                            Bạn có chắc chắn muốn xóa người dùng này?
                        </Modal>
                    </>
                )
            },
        },
    ];

    const data = users

        .map(user => ({
            key: user.id,
            name: `${user?.firstName} ${user?.lastName}`,
            age: calculateAge(user?.dob),
            phone: user?.phone,
            email: user?.email,
            city: user?.city,
        }));


    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <Link href='/admin'>Admin</Link>,
                    },
                    {
                        title: <Link href="/admin/users">Users</Link>,
                    },
                ]}
                style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "16px",
                }}
            />
            <Table columns={columns} dataSource={data} />;
        </div>
    );
}
