"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import styles from "./PersonalityResults.module.css";

const PersonalityResults = () => {
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [mainResult, setMainResult] = useState(null);
  const navigateToQuiz = () => {
    router.push("mbti_test/quiz");
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(date);
  };

  useEffect(() => {
    let isMounted = true;
    const getMainResult = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:8088/api/v1/user-results/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        const historyData = response.data;

        if (isMounted) {
          const formattedHistory = historyData.map((entry) => ({
            ...entry,
            testDate: formatDate(entry.testDate),
          }));
          setHistory(formattedHistory);
          if (formattedHistory.length > 0) {
            const mainResult = findMainResult(formattedHistory);
            setMainResult(mainResult);
          }
        }
      } catch (error) {
        console.log(error);
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    getMainResult();

    return () => {
      isMounted = false;
    };
  }, []);

  const findMainResult = (history) => {
    if (!history || !history.length) return null;

    // Step 1: Sort the history by testDate in descending order (most recent first)
    const sortedHistory = [...history].sort(
      (a, b) => new Date(b.testDate) - new Date(a.testDate)
    );

    // Step 2: Create an object to keep track of each mbtiType and its frequency
    // Also store the most recent date it appeared on
    const typeFrequency = sortedHistory.reduce((acc, curr) => {
      if (!acc[curr.mbtiType]) {
        acc[curr.mbtiType] = { count: 1, recentDate: curr.testDate };
      } else {
        acc[curr.mbtiType].count++;
        acc[curr.mbtiType].recentDate = curr.testDate; // Keep updating with the most recent date
      }
      return acc;
    }, {});

    // Step 3: Find the mbtiType with the highest frequency and most recent date
    let mainResultType = null;
    let maxCount = 0;
    let latestDate = new Date(0); // Epoch time
    for (const [type, { count, recentDate }] of Object.entries(typeFrequency)) {
      if (
        count > maxCount ||
        (count === maxCount && new Date(recentDate) > latestDate)
      ) {
        mainResultType = type;
        maxCount = count;
        latestDate = new Date(recentDate);
      }
    }

    // Return the complete result for the mainResultType
    return sortedHistory.find((result) => result.mbtiType === mainResultType);
  };

  return (
    <div className={styles.container}>
      {history.length === 0 ? (
        <div className={styles.noResultsContainer}>
          <h2 className={styles.noResultsHeading}>Khám phá Bản Thân</h2>
          <p className={styles.noResultsMessage}>
            Bạn chưa khám phá kiểu nhân cách MBTI của mình. Hãy bắt đầu trắc
            nghiệm để hiểu rõ hơn về bản thân và cách bạn tương tác với thế giới
            xung quanh.
          </p>
          <button onClick={navigateToQuiz} className={styles.startTestButton}>
            Bắt đầu trắc nghiệm
          </button>
        </div>
      ) : (
        // Display results if they exist
        <>
          <div className={styles.resultSection}>
            <div className={styles.title}>Bạn là kiểu người</div>
            <div className={styles.resultCard}>
              <div className={styles.type}>{mainResult?.mbtiType}</div>
              <Link
                href={`/app/mbti_test/about/${mainResult?.mbtiType}`}
                legacyBehavior
              >
                <a className={styles.linkButton}>
                  Đọc thêm về tính cách của bạn
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.historyTitle}>Lịch sử khảo sát</div>
          {history.map((entry, index) => (
            <div key={index} className={styles.historyItem}>
              <span className={styles.date}>{entry.testDate}</span>{" "}
              {entry.mbtiType}
            </div>
          ))}
          <button onClick={navigateToQuiz} className={styles.startTestButton}>
            Bắt đầu trắc nghiệm
          </button>
        </>
      )}
    </div>
  );
};

export default PersonalityResults;
