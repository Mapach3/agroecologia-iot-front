import AuthService from "../../api/auth/AuthService";
import { ILoginResponse, IProfile } from "../../api/auth/models";
import { Action, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

// Interfaces
export interface IAuthState {
  token?: string;
  profile?: IProfile;
  expire?: string;
}
//

const initialState: IAuthState = {
  token: AuthService.getToken(),
  profile: AuthService.getUserProfile(),
  expire: AuthService.getTokenExpire(),
};

//Slice
const authSlice: Slice<IAuthState> = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccessful: (state, action: PayloadAction<ILoginResponse>) => {
      const { token, profile, expire } = action.payload;
      state = { ...state, token, profile, expire };
      return state;
    },
    logout: (state) => {
      return {
        ...state,
        expire: undefined,
        profile: undefined,
        token: undefined,
      };
    },
  },
});

export const { loginSuccessful, logout } = authSlice.actions;

export default authSlice.reducer;
