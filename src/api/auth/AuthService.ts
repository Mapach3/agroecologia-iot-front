import { API } from "../../config/api";
import {
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

    const { token, profile } = response;
    localStorage.setItem(LOCAL_STORAGE_JWT, token);
    AuthService.saveUserToLocalStorage(profile);
    return response;
  }

  static saveUserToLocalStorage(profile: IProfile) {
    localStorage.setItem(LOCAL_STORAGE_PROFILE, JSON.stringify(profile));
  }
}

export default AuthService;
