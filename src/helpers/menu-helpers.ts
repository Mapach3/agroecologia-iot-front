import { RolesEnum } from "../api/roles/enum";
import { URLs } from "../config/enums";

export interface MenuItem {
  key: any;
  label: string;
  role?: string[];
}

export const MenuItems: MenuItem[] = [
  { key: URLs.ROOT, label: "Dashboard" },
  { key: URLs.USERS, label: "Usuarios", role: [RolesEnum.ADMIN] },
  { key: URLs.ROLES, label: "Roles", role: [RolesEnum.ADMIN] },
  { key: URLs.GARDENS, label: "Huertas" },
  { key: URLs.SHARED_GARDENS, label: "Huertas Compartidas" },
];
