"use client"
import React from 'react';
import { Breadcrumb } from 'antd';
import { useState, useEffect } from 'react';
import { Space, Table, Tag, Progress, Button, Popconfirm } from 'antd';
import Link from 'next/link';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useParams } from 'next/navigation';


export default function Users() {
    const params = useParams();
    const [users, setUsers] = useState([]);

    console.log(params);
    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:8088/api/v1/users', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTEzMzAzOTksImV4cCI6MTcxMTQxNjc5OX0.2XAhUW9cR0-mWvmZC_ACi_Mts4GwtUHWSRKhM_jSi7R4qRXv4FJCCzxrsOdh1h4x'
                }
            })
            const data = await res.json()
            console.log(data);
            setUsers(data);
        })();
    }, []);

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
            title: 'Popularity',
            dataIndex: 'popularity',
            key: 'popularity',
            render: (popularity) => (
                <>
                    <Progress percent={popularity} size={"small"} strokeColor={{ from: "#108ee9", to: "#87d068" }} />
                </>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                const userId = record.key;
                return (
                    <Space size="middle">
                        <Popconfirm
                            title="Ban người dùng"
                            description="Bạn có chắc chắn muốn ban người dùng này chứ?"
                        >
                            <Button type='primary' danger>Ban</Button>
                        </Popconfirm>
                        <Button type='primary' secondary>Phân quyền</Button>
                    </Space>
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
            popularity: user?.popularity,
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
