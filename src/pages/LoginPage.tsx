import { Button, Card, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";

const LoginPage: React.FC = () => {
  const [form] = useForm();
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={24} sm={24} md={7}>
          <Card title="Agroecología IoT" style={{ minHeight: "100vh" }}>
            <Form form={form}>
              <Form.Item name="username" required>
                <Input size="large" placeholder="Username" />
              </Form.Item>
              <Form.Item name="password">
                <Input size="large" type="password" placeholder="Password" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log in
              </Button>
            </Form>
          </Card>
        </Col>
        <Col xs={0} sm={0} md={17} style={{ display: "flex" }}>
          <div className="login-background-image" />
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
