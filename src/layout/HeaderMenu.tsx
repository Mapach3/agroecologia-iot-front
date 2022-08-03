import { Menu } from "antd";
import { useNavigate } from "react-router";
import { MenuItems } from "../helpers/menu-helpers";

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu mode="horizontal" className="header-menu">
      {MenuItems.map((item) => (
        <Menu.Item
          key={item.key}
          onClick={() => navigate(item.path)}
          className="header-menu-item"
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HeaderMenu;
