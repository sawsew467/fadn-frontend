"use client";
import React, { useState, useEffect } from "react";
import styles from "./PersonalityDetails.module.css";
import axios from "axios";

import {
  FaUserFriends,
  FaBriefcase,
  FaHeart,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from "react-icons/fa";

const PersonalityDetails = ({ params }) => {
  const typeToIdMapping = {
    ISTJ: 1,
    ISFJ: 2,
    ISTP: 3,
    ISFP: 4,
    INFJ: 5,
    INFP: 6,
    INTJ: 7,
    INTP: 8,
    ESTP: 9,
    ESTJ: 10,
    ESFP: 11,
    ESFJ: 12,
    ENFP: 13,
    ENFJ: 14,
    ENTP: 15,
    ENTJ: 16,
  };

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchPersonalityDetails = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        const personalityId = typeToIdMapping[params.type];
        const response = await axios.get(
          `http://localhost:8088/api/v1/personality/${personalityId}`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );

        const data = response.data;

        if (data) {
          setDetails({
            title: data.title,
            description: data.description,
            strengths: data.strengths
              ? data.strengths.map((s) => s.strength)
              : [],
            weaknesses: data.weaknesses
              ? data.weaknesses.map((w) => w.weakness)
              : [],
            famousPersonalities: data.famousPersonalities
              ? data.famousPersonalities.map((p) => p.name)
              : [],
            recommendedCareers: data.recommendedCareers
              ? data.recommendedCareers.map((c) => c.career)
              : [],
            relationships: data.relationship
              ? data.relationship.description
              : "",
          });
        }
      } catch (error) {
        console.error("Error fetching personality details:", error);
      }
    };

    fetchPersonalityDetails();
  }, [params]);

  if (!details) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{details.title}</h1>
      <p className={styles.description}>{details.description}</p>

      <section className={styles.attributesSection}>
        <div className={styles.attributesList}>
          <h2 className={styles.subheading}>
            <FaRegThumbsUp /> Điểm mạnh
          </h2>
          <ul className={styles.strengths}>
            {details.strengths.map((strength, index) => (
              <li key={index}>
                <FaUserFriends /> {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.attributesList}>
          <h2 className={styles.subheading}>
            <FaRegThumbsDown /> Điểm yếu
          </h2>
          <ul className={styles.weaknesses}>
            {details.weaknesses.map((weakness, index) => (
              <li key={index}>
                <FaHeart /> {weakness}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.attributesList}>
          <h2 className={styles.subheading}>Nhân vật nổi tiếng</h2>
          <ul>
            {details.famousPersonalities.map((person, index) => (
              <li key={index}>{person}</li>
            ))}
          </ul>
        </div>

        <div className={styles.attributesList}>
          <h2 className={styles.subheading}>
            <FaBriefcase /> Nghề nghiệp phù hợp
          </h2>
          <ul>
            {details.recommendedCareers.map((career, index) => (
              <li key={index}>
                <FaBriefcase /> {career}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.attributesList}>
          <h2 className={styles.subheading}>
            <FaHeart /> Dynamics trong mối quan hệ
          </h2>
          <p>{details.relationships}</p>
        </div>
      </section>
    </div>
  );
};

export default PersonalityDetails;
