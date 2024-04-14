import React from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton, Empty } from "antd";

import { diffTimeFromNow } from "@/utils/diffTimeFromNow";

import defaultImage from "@/public/images/admin/community.png";

import * as S from "./DropdownNotification";

export default function DropdownNotification() {
  const data = [
    {
      id: 1,
      send_from: {
        avatar: "/images/avatar/img1.png",
      },
      title: "Notification Title 1",
      message: {
        body: "This is the message body for notification 1.",
        created_at: "2024-03-07T12:30:00", // Replace with actual timestamp
      },
      status: "unread", // or "read" based on the notification status
    },
    {
      id: 2,
      send_from: {
        avatar: "/images/avatar/img2.png",
      },
      title: "Notification Title 2",
      message: {
        body: "This is the message body for notification 2.",
        created_at: "2024-03-06T15:45:00", // Replace with actual timestamp
      },
      status: "read", // or "unread" based on the notification status
    },
    // Add more notification objects as needed
  ];

  const count = 5;

  const userInfo = {
    firstName: "Tran Van Bao Thang",
    email: "thangtvb.dev@gmail.com",
  };

  const loadMoreData = () => {
    //
  };

  return (
    <S.DropdownNotification id="notificationPopup">
      {data?.length === 0 ? (
        <div className="wrap-empty">
          <Empty />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data?.length < count}
          loader={
            <>
              <br />
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </>
          }
          scrollableTarget="notificationPopup"
        >
          {data?.map((item) => (
            <S.NoteWrap
              key={item.id}
              $status={item?.status}
              onClick={() => handleOpenNotification(item)}
            >
              <Image
                className="avatar-image"
                src={item?.send_from?.avatar || defaultImage}
                width={45}
                height={45}
                alt=""
              />
              <S.NoteContent>
                <div className="subtitle2">
                  {userInfo?.firstName || userInfo?.email}
                  <span> {item?.title}</span>
                </div>
                <p className="caption">{item?.message?.body}</p>
                <p className="caption">
                  {diffTimeFromNow(item?.message.created_at)} trước
                </p>
              </S.NoteContent>
            </S.NoteWrap>
          ))}
        </InfiniteScroll>
      )}
    </S.DropdownNotification>
  );
}
