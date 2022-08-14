import { Card } from "antd";
import React from "react";

interface Props {}

const DashboardPage: React.FC<Props> = () => {
  return (
    <div className="container">
      <Card title="Dashboard">Componente de Prueba</Card>
    </div>
  );
};

export default DashboardPage;
