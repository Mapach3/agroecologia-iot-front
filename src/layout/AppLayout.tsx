import { Layout } from "antd";
import React from "react";
import Header from "./Header";

const { Content, Footer } = Layout;

interface Props {
  children?: React.ReactElement;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Agroecología IoT - Copyright UNLa {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AppLayout;
