import React from 'react'
import styles from '../styles/Profile.module.css'; // CSS Module for styling

export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:8085/api/v1/user?page=5&limit=3")
    const userId = context.params.userid;
    // Replace this with actual data fetching logic
    const userData = { /* fetch user data based on userId */ };
    return { props: { userData } };
}

export default function UserProfile({ userData }) {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <img src={userData.avatar} className={styles.avatar} alt="User Avatar" />
                <h2>{userData.firstName} {userData.lastName}</h2>
            </div>
            <ul className={styles.userInfo}>
                <li>Date of Birth: {userData.dateOfBirth}</li>
                <li>Nickname: {userData.nickname}</li>
                <li>Gender: {userData.gender}</li>
                <li>Email: {userData.email}</li>
                <li>Address: {userData.address}</li>
                <li>Facebook: {userData.facebookAccount}</li>
                <li>Google: {userData.googleAccount}</li>
                <li>Status: <span className={userData.isActive ? styles.active : styles.inactive}>{userData.isActive ? 'Active' : 'Inactive'}</span></li>
                <li>Popularity Points: {userData.popularityPoints}</li>
                <li>Role: {userData.role}</li>
                <li>Phone Number: {userData.phoneNumber}</li>
            </ul>
        </div>
    );
}