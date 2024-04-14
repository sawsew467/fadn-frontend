import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Select, InputNumber, message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const CreateQuestionForm = ({ onFormSubmit, initialData, resetForm }) => {
  const [form] = Form.useForm();
  const [isConstructive, setIsConstructive] = useState(false);
  const [showMBTIFields, setShowMBTIFields] = useState(false);
  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        question_text: initialData.question_text,
        question_type: initialData.question_type,
        answers: initialData.answers
          ? initialData.answers.map((answer) => ({
              answerText: answer.answerText,
              score: answer.score,
              mbtiDimension: answer.mbtiDimension,
            }))
          : [],
      });
    }
    resetForm();
    setShowMBTIFields(initialData?.question_type === 'mbti');
  }, [initialData, resetForm, form]);

 const onQuestionTypeChange = (value) => {
   setIsConstructive(value === "constructive");
   setShowMBTIFields(value === "mbti");
 };


  const onFinish = (values) => {
    if (values.answers && values.answers.length < 2) {
      message.error("At least two answers are required");
      return;
    }

    onFormSubmit(values, initialData ? initialData.question_id : null);

    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="question_text"
        label="Question Text"
        rules={[{ required: true, message: "Please input the question text!" }]}
      >
        <Input placeholder="What's your question?" />
      </Form.Item>

      <Form.Item
        name="question_type"
        label="Question Type"
        rules={[
          { required: true, message: "Please select the question type!" },
        ]}
      >
        <Select
          placeholder="Select a question type"
          onChange={onQuestionTypeChange}
        >
          <Option value="constructive">Constructive</Option>
          <Option value="mbti">MBTI</Option>
        </Select>
      </Form.Item>

      <Form.List name="answers">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "answerText"]}
                  rules={[{ required: true, message: "Missing answer text" }]}
                >
                  <Input placeholder="Answer Text" />
                </Form.Item>
                {showMBTIFields && (
                  <>
                    <Form.Item
                      {...restField}
                      name={[name, "mbtiDimension"]}
                      rules={[
                        { required: true, message: "Missing MBTI dimension" },
                      ]}
                    >
                      <Select placeholder="MBTI Dimension">
                        <Option value="E">Extraversion (E)</Option>
                        <Option value="I">Introversion (I)</Option>
                        <Option value="S">Sensing (S)</Option>
                        <Option value="N">Intuition (N)</Option>
                        <Option value="T">Thinking (T)</Option>
                        <Option value="F">Feeling (F)</Option>
                        <Option value="J">Judging (J)</Option>
                        <Option value="P">Perceiving (P)</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "score"]}
                      rules={[{ required: true, message: "Missing score" }]}
                    >
                      <InputNumber min={1} placeholder="Score" />
                    </Form.Item>
                  </>
                )}
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Answer
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateQuestionForm;
