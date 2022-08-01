import { Button } from "antd";
import React from "react";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Button type="primary" onClick={() => console.log("Click!")}>
        Click me!
      </Button>
    </div>
  );
};

export default App;
