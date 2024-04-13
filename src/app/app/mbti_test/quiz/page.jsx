"use client";
import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.css";
import { useRouter } from "next/navigation";

const Quiz = () => {
  let mbtiScores = {
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const router = useRouter();
  const [error, setError] = useState(null);

  const navigateToQuiz = () => {
    router.push("/app/mbti_test");
  };

  const saveResults = async () => {
    const mbtiType = calculateMBTIType();
    const resultToSave = {
      userId: `${localStorage.getItem("userId")}`,
      mbtiType: mbtiType,
      testDate: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        `http://localhost:8088/api/v1/user-results`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(resultToSave),
        }
      );

      if (response.ok) {
        navigateToQuiz();
      } else {
        console.error("Failed to save results:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to send results:", error);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8088/api/v1/questions/mbti",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setQuestions(data);
        setSelectedAnswers(Array(data.length).fill(null));
        setError(null);
      } catch (error) {
        setError("Có lỗi bên server, vui lòng thử lại sau !");
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerOptionClick = (optionIndex, questionIndex) => {
    const updatedSelectedAnswers = selectedAnswers.map((item, idx) =>
      idx === questionIndex ? optionIndex : item
    );
    setSelectedAnswers(updatedSelectedAnswers);

    const { dimension, score } = questions[questionIndex].answers[optionIndex];
    mbtiScores[dimension] += score;
  };

  const calculateMBTIType = () => {
    let type = "";
    type += mbtiScores["I"] >= mbtiScores["E"] ? "I" : "E";
    type += mbtiScores["S"] >= mbtiScores["N"] ? "S" : "N";
    type += mbtiScores["T"] >= mbtiScores["F"] ? "T" : "F";
    type += mbtiScores["J"] >= mbtiScores["P"] ? "J" : "P";
    return type;
  };

  const navigateQuestions = (direction) => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + direction);
  };

  const calculateResult = () => {
    const totalScore = selectedAnswers.reduce(
      (total, answerIndex, questionIndex) => {
        if (answerIndex !== null) {
          const question = questions[questionIndex];
          const answerScore = question.answers[answerIndex].score;
          return total + answerScore;
        }
        return total;
      },
      0
    );
    setResult(totalScore);
    saveResults();
  };

  return (
    <div className={styles.container}>
      {error ? (
        <div>
          <div className={styles.error}>{error}</div>
          <div className={styles.parent}>
            <button className={styles.button} onClick={navigateToQuiz}>
              Quay lại
            </button>
          </div>
        </div>
      ) : currentQuestionIndex < questions.length ? (
        <>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className={styles.questionSection}>
            <div className={styles.questionCount}>
              <span>Câu {currentQuestionIndex + 1}</span>/{questions.length}
            </div>
            <div className={styles.questionText}>
              {questions[currentQuestionIndex]?.question_text}
            </div>
          </div>
          <div className={styles.answerSection}>
            {questions[currentQuestionIndex]?.answers.map(
              (option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() =>
                    handleAnswerOptionClick(optionIndex, currentQuestionIndex)
                  }
                  className={`${styles.answerButton} ${
                    selectedAnswers[currentQuestionIndex] === optionIndex
                      ? styles.activeButton
                      : ""
                  }`}
                >
                  {option.answerText}
                </button>
              )
            )}
          </div>
          <div className={styles.backNextButtons}>
            <button
              onClick={() => navigateQuestions(-1)}
              disabled={currentQuestionIndex === 0}
            >
              Trước
            </button>
            <button
              onClick={() => navigateQuestions(1)}
              disabled={currentQuestionIndex >= questions.length}
            >
              Tiếp theo
            </button>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <div className={styles.messageBox}>
            <p className={styles.message}>
              Bạn đã hoàn thành toàn bộ câu hỏi trắc nghiệm
            </p>
            <button className={styles.button} onClick={calculateResult}>
              Hoàn thành
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
