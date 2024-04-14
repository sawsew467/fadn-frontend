"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

export default function FriendRequests() {
  const [friendRequests, setFriendRequests] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (userId && token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .get(`http://localhost:8088/api/v1/friends/to-user/${userId}`, {
          headers,
        })
        .then((response) => {
          
          setFriendRequests(response.data.filter((request) => !request.accepted));
        })
        .catch((error) => {
          console.error("Error fetching friend requests:", error);
        });
    }
  }, []);

   const acceptFriendRequest = (toId, fromId) => {
     const token = localStorage.getItem("token");
     if (token) {
       axios
         .put(
           `http://localhost:8088/api/v1/friends/accept/${toId}/${fromId}`,
           {},
           {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           }
         )
         .then((response) => {
           console.log(response.data);
           setFriendRequests(
             friendRequests.filter((request) => request.from_id !== fromId)
           );
         })
         .catch((error) => {
           console.error("Failed to accept friend request:", error);
         });
     }
   };

  return (
    <>
      <div className="page-title">
        Yêu Cầu Kết Bạn
        <div className="right">
          <Link
            href="#"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            style={{ textDecoration: "none" }}
          >
            Tìm bạn
          </Link>
        </div>
      </div>
      
      <div className="frind-box">
        {friendRequests.map((friend, index) => (
          <div className="single-friend" key={index}>
            <div className="left">
              <img
                src={`/pageImages/friend-request/${friend.avatar}`}
                alt={friend.name}
              />
              <div className="content">
                <h5 className="name">
                  {friend.name}{" "}
                  {friend.accepted && <i className="fas fa-certificate"></i>}
                </h5>
                <span className="age">{friend.age} tuổi</span>
                <span className="separator">·</span>
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i> {friend.address}
                </span>
              </div>
            </div>
            <div className="right">
              <button
                className="accept"
                onClick={() =>
                  acceptFriendRequest(friend.to_id, friend.from_id)
                }
              >
                Chấp nhận
              </button>
              <button className="ignore">Từ chối</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
