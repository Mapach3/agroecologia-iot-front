import { Menu } from "antd";
import { useNavigate } from "react-router";
import { MenuItems } from "../helpers/menu-helpers";

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu
      mode="horizontal"
      className="header-menu"
      items={MenuItems}
      onClick={({ key }) => navigate(key)}
    ></Menu>
  );
};

export default HeaderMenu;
