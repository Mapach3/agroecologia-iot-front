import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MenuItems } from "../helpers/menu-helpers";

const HeaderMobileMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MenuOutlined
        style={{
          color: "white",
          padding: 8,
          fontSize: "1.2rem",
          border: "1px solid",
          borderRadius: 2.5,
        }}
        onClick={() => setVisible(true)}
      />
      <Drawer
        width="60%"
        visible={visible}
        onClose={() => setVisible(false)}
        closable
      >
        <Menu
          style={{ border: 0 }}
          items={MenuItems}
          onClick={({ key }) => {
            setVisible(false);
            navigate(key);
          }}
        ></Menu>
      </Drawer>
    </>
  );
};

export default HeaderMobileMenu;
