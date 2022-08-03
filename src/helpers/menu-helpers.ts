export interface MenuItem {
  key: any;
  label: string;
  path: string;
  role?: string[];
}

export const MenuItems: MenuItem[] = [
  {
    key: 1,
    label: "Dashboard",
    path: "/",
  },
  {
    key: 2,
    label: "Usuarios",
    path: "/usuarios",
  },
  {
    key: 3,
    label: "Roles",
    path: "/roles",
  },
  {
    key: 4,
    label: "Huertas",
    path: "/huertas",
  },
];
