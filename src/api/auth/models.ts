export interface ILoginResponse {
  token: string;
  profile: IProfile;
  expire: string;
}

export interface IProfile {
  username: string;
  name: string;
  surname: string;
  roleCode: string;
}
