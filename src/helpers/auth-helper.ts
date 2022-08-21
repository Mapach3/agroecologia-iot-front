import { DateTime } from "luxon";
import { getAuthToken, getTokenExpiration } from "../redux/selectors";
import store from "../redux/store";

export const mustRefreshToken = (): boolean => {
  if (getAuthToken(store.getState())) return false;

  const expirationISO = getTokenExpiration(store.getState());

  return !expirationISO
    ? false
    : DateTime.fromISO(expirationISO) <= DateTime.now();
};
