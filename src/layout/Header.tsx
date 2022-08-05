import React from "react";
import { Avatar, Col, Layout, Row } from "antd";
import HeaderMenu from "./HeaderMenu";
import { UserOutlined } from "@ant-design/icons";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header: React.FC = () => {
  return (
    <Layout.Header className="header">
      <div className="container">
        <Row gutter={12} align="bottom">
          <Col xs={20} sm={10} md={7}>
            <div className="logo">Agroecología IoT</div>
          </Col>
          <Col xs={0} sm={10} md={12}>
            <HeaderMenu />
          </Col>
          <Col xs={4} sm={0} md={0} style={{ textAlign: "end" }}>
            <HeaderMobileMenu />
          </Col>
          <Col xs={0} sm={4} md={5} style={{ textAlign: "end" }}>
            <Avatar icon={<UserOutlined />} />
          </Col>
        </Row>
      </div>
    </Layout.Header>
  );
};

export default Header;
