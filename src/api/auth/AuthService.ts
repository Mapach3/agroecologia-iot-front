import { API } from "../../config/api";
import {
  LOCAL_STORAGE_EXPIRE,
  LOCAL_STORAGE_JWT,
  LOCAL_STORAGE_PROFILE,
} from "../../config/general-config";
import FetchService from "../shared/FetchService";
import { ILoginResponse, IProfile } from "./models";

class AuthService {
  static async loginWithUsernameAndPassword(
    username: string,
    password: string
  ) {
    const response = await FetchService.post<ILoginResponse>({
      url: API.LOGIN,
      body: { username, password },
    });

    const { token, profile, expire } = response;
    localStorage.setItem(LOCAL_STORAGE_JWT, token);
    if (expire) localStorage.setItem(LOCAL_STORAGE_EXPIRE, expire);
    AuthService.saveUserToLocalStorage(profile);
    return response;
  }

  //Local Storage Helper Methods
  static saveUserToLocalStorage(profile: IProfile) {
    localStorage.setItem(LOCAL_STORAGE_PROFILE, JSON.stringify(profile));
  }

  static getUserProfile(): IProfile | undefined {
    const jsonProfile = localStorage.getItem(LOCAL_STORAGE_PROFILE);
    if (!jsonProfile) return undefined;
    return JSON.parse(jsonProfile) as IProfile;
  }

  static getToken(): string | undefined {
    const jwtToken = localStorage.getItem(LOCAL_STORAGE_JWT);
    return jwtToken || undefined;
  }

  static getTokenExpire(): string | undefined {
    const tokenExpire = localStorage.getItem(LOCAL_STORAGE_EXPIRE);
    return tokenExpire || undefined;
  }

  static removeLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_PROFILE);
    localStorage.removeItem(LOCAL_STORAGE_JWT);
    localStorage.removeItem(LOCAL_STORAGE_EXPIRE);
  }
}

export default AuthService;
