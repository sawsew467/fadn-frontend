"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import styles from "./page.module.css";
import { MdEmail, MdPhone, MdRemoveCircleOutline } from "react-icons/md"; // Importing icons

export default function ViewAllFriends() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (userId && token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .get(`http://localhost:8088/api/v1/friends/${userId}/all`, { headers })
        .then((response) => {
          setFriends(response.data);
        })
        .catch((error) => {
          console.error("Error fetching friends:", error);
          setError("Failed to fetch friends. Please try again later.");
        });
    } else {
      setError("User not authenticated.");
    }
  }, []);

  const removeFriend = (friendId) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (userId && token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .delete(
          `http://localhost:8088/api/v1/friends/remove?userId=${userId}&friendId=${friendId}`,
          { headers }
        )
        .then((response) => {
          message.success("Friend removed successfully");
          setFriends(friends.filter((friend) => friend.friend_id !== friendId));
        })
        .catch((error) => {
          console.error("Error removing friend:", error);
          setError("Failed to remove friend. Please try again later.");
        });
    }
  };
  return (
    <>
      
      <div className={styles.pageTitle}>Danh Sách Bạn Bè</div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <div className={styles.friendsList}>
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <div className={styles.friend} key={index}>
              <div className={styles.friendDetails}>
                <img
                  src={`${friend.avatar}`}
                  alt={friend.name}
                  className={styles.friendImg}
                />
                <div className={styles.friendInfo}>
                  <h4>{friend.name}</h4>
                  <p>Sống tại {friend.address}</p>
                  {friend.email && (
                    <p>
                      <MdEmail /> Email: {friend.email}
                    </p>
                  )}
                  {friend.phone && (
                    <p>
                      <MdPhone /> Phone: {friend.phone}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeFriend(friend.friend_id)}
                className={styles.removeFriendButton}
              >
                <MdRemoveCircleOutline /> Remove Friend
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noFriendsMessage}>No friends to display.</p>
        )}
      </div>
    </>
  );
}
