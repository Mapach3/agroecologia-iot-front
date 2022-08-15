export interface IUser {
  userId: number;
  name: string;
  surname: string;
  roleId: number;
  roleName?: string;
  username: string;
  password: string;
  email: string;
  createdDate?: string;
}
