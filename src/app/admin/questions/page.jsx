"use client";
import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message, Modal, Space } from "antd";
import CreateQuestionForm from "../../../components/modules/app/add_question/CreateQuestionForm";
import axios from "axios";

const AdminQuestionManage = () => {
  const [questions, setQuestions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [formResetKey, setFormResetKey] = useState(Date.now());

  const handleCreateNewQuestion = () => {
    setEditingQuestion(null);
    setFormResetKey(Date.now());
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
    setEditingQuestion(null);
    setFormResetKey(Date.now());
  };

  const handleEdit = (question) => {
    setEditingQuestion(question);
    setIsModalVisible(true);
  };

  let storedToken = "";
  let api = "";
  if (typeof window !== "undefined") {
    storedToken = localStorage.getItem("token");
    api = axios.create({
      baseURL: "http://localhost:8088",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    });
  }

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/v1/questions");
      if (response.data && response.data.length > 0) {
        setQuestions(response.data.map((q) => ({ ...q, key: q.question_id })));
      } else {
        message.error("No questions found");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      message.error("Failed to fetch questions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleDeleteQuestion = async (questionId) => {
    try {
      await axios.delete(
        `http://localhost:8088/api/v1/questions/constructive/${questionId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setQuestions(
        questions.filter((question) => question.question_id !== questionId)
      );
      message.success("Question deleted successfully!");
    } catch (error) {
      message.error("Failed to delete question");
    }
  };

  const handleCreateOrUpdateQuestion = async (values, id) => {
    try {
      let response;
      if (id) {
        response = await api.put(
          `/api/v1/questions/constructive/${id}`,
          values
        );
      } else {
        console.log(values);
        response = await api.post("/api/v1/questions/constructive", values);
        console.log(response);
      }
      message.success(`Question ${id ? "updated" : "created"} successfully!`);
    } catch (error) {
      console.log(error);
      message.error(`Failed to ${id ? "update" : "create"} question`);
    } finally {
      fetchQuestions();
      hideModal();
    }
  };

  const columns = [
    { title: "Question", dataIndex: "question_text", key: "question_text" },
    {
      title: "Question Type",
      dataIndex: "question_type",
      key: "question_type",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <span>
            <Space>
              <Button onClick={() => handleEdit(record)} type="primary">
                Edit
              </Button>
            </Space>
          </span>
          <span>
            <Popconfirm
              title="Are you sure to delete this question?"
              onConfirm={() => handleDeleteQuestion(record.question_id)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="danger"
                style={{
                  marginLeft: 8,
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  borderColor: "#ff4d4f",
                }}
              >
                Delete
              </Button>
            </Popconfirm>
          </span>
        </>
      ),
    },
  ];
const expandedRowRender = (record) => {
  let answerColumns = [
    { title: "Answer", dataIndex: "answerText", key: "answerText" },
  ];

  // Check if the question type is 'mbti' to decide whether to add score and dimension columns
  if (record.question_type === "mbti") {
    answerColumns.push(
      { title: "Score", dataIndex: "score", key: "score" },
      {
        title: "MBTI Dimension",
        dataIndex: "mbtiDimension",
        key: "mbtiDimension",
      }
    );
  }

  return (
    <Table
      columns={answerColumns}
      dataSource={
        record.answers?.map((a, index) => ({ ...a, key: index })) || []
      }
      pagination={false}
    />
  );
};
 


  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "16px" }}>Admin Question Management</h2>
        <Button
          type="primary"
          onClick={handleCreateNewQuestion}
          style={{ marginBottom: 16 }}
        >
          Create New Question
        </Button>
      </div>

      <Modal
        title={`${editingQuestion ? "Edit" : "Create New"} Question`}
        visible={isModalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <CreateQuestionForm
          key={formResetKey}
          onFormSubmit={handleCreateOrUpdateQuestion}
          initialData={editingQuestion}
          resetForm={
            () => {} 
          }
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={questions}
        loading={loading}
        rowKey="question_id"
        expandable={{ expandedRowRender }}
      />
    </div>
  );
};

export default AdminQuestionManage;
