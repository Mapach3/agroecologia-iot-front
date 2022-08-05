import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { URLs } from "../config/enums";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const content = () => {
    return (
      <Result
        status="404"
        title="404"
        subTitle="La página solicitada no existe"
        extra={
          <Button type="primary" onClick={() => navigate(URLs.ROOT)}>
            Volver al principio
          </Button>
        }
      />
    );
  };
  return <>{content()}</>;
};

export default NotFoundPage;
