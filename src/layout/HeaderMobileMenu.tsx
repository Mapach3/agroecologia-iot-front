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
          fontSize: "1.1rem",
          border: "1px solid",
          borderRadius: 3,
        }}
        onClick={() => setVisible(true)}
      />
      <Drawer
        width="60%"
        visible={visible}
        onClose={() => setVisible(false)}
        closable={false}
      >
        <Menu style={{ border: 0 }}>
          {MenuItems.map((item) => (
            <Menu.Item key={item.key} onClick={() => navigate(item.path)}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </>
  );
};

export default HeaderMobileMenu;
