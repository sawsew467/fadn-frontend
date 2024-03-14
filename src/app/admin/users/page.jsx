"use client"
import React from 'react';
import { Breadcrumb } from 'antd';
import { useState, useEffect } from 'react';
import { Space, Table, Tag, Progress, Button } from 'antd';
import Link from 'next/link';


export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8085/api/v1/user?page=5&limit=3")
      const data = await response.json()
      setUsers(data);
    })();
  }, []);

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
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
    // {
    //     title: 'Nickname',
    //     dataIndex: 'Nickname',
    //     key: 'Nickname',
    // },
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
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {Array.isArray(tags) ? tags.map((tag) => {
            let color = tag === "User" ? "green" :
              tag === "Guest" ? "geekblue" :
                tag === "Admin" ? "red" : "default";
            return <Tag color={color} key={tag}>{tag}</Tag>;
          }) : null}
        </>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link href={"/admin/UserDetail"}>Detail</Link>
          <Button type='primary' danger>Ban</Button>
        </Space>
      ),
    },
  ];

  const data = users.map(user => (
    {
      key: user.id,
      name: `${user.firstName} ${user.lastName}`,
      age: calculateAge(user.dateOfBirth),
      phone: user.phone,
      email: user.email,
      tags: [user.role.name],
      popularity: user.popularity,

    }

  ));

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: <a href='/admin'>Admin</a>,
          },
          {
            title: <a href="/admin/users">Users</a>,
          },
        ]}
      />
      <Table columns={columns} dataSource={data} />;
    </div>
  );
}
