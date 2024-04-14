import { Modal, Form, Input, Rate, Flex } from "antd";

import Button from "@/components/core/common/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

function RatingModal({ isModalOpen = false }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    rate: 5,
    description: "",
  });
  const router = useRouter();

  const handleSubmit = async () => {
    console.log(form);
    setIsLoading(false);
    router.push("/app");
  };
  return (
    <Modal
      open={isModalOpen}
      footer={[
        <Flex justify="center" key="submit">
          <Button type="primary" loading={isLoading} onClick={handleSubmit}>
            Gửi đánh giá
          </Button>
        </Flex>,
      ]}
      closeIcon={false}
    >
      <h3
        style={{
          fontSize: 24,
          textAlign: "center",
        }}
      >
        CUỘC GỌI ĐÃ KẾT THÚC
      </h3>
      <p
        style={{
          fontSize: 14,
          textAlign: "center",
          color: "#828282",
          margin: 12,
        }}
      >
        Để cải thiện chất lượng các cuộc gọi về sau, hãy để lại góp ý của bạn ở
        phía dưới nhé!
      </p>
      <Form name="feedbacks" layout="vertical">
        <Form.Item
          label="Chất lượng"
          name="rate"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Rate
            value={form?.rate}
            defaultValue={form?.rate}
            onChange={(e) => setForm({ ...form, rate: e })}
          />
        </Form.Item>

        <Form.Item label="Lời nhắn" name="description">
          <Input.TextArea
            rows={4}
            value={form?.description}
            onChange={(e) =>
              setForm({ ...form, description: e?.target?.value })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default RatingModal;
