import { endPoints } from '../const/endPoints';
import { types } from '../context/types/types';
import {
  fetchWithoutToken,
  fetchWithRefreshToken,
  fetchWithToken,
} from '../helpers/fetch';

export const startLogin = (userOrEmail, password) => {
  console.log(userOrEmail, password);
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      endPoints.signin,
      { userOrEmail, password },
      'POST'
    );
    const body = await resp.json();
    console.log(body);
    console.log(`este es el status ${resp.status}`);
    if (resp.status === 200) {
      localStorage.setItem('at', body.access_token);
      localStorage.setItem('rt', body.refresh_token);
      const user = await getUser();
      dispatch(
        login({
          user,
        })
      );
    } else {
      console.log(body.error);
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    if (!localStorage.getItem('at') && !localStorage.getItem('rt')) {
      return dispatch(checkingFinish());
    }
    const user = await getUser();
    if (user.statusCode === 401) {
      const refresh = await fetchWithRefreshToken(endPoints.refresh_token);
      const body = await refresh.json();
      if (!refresh.status === 200) {
        return dispatch(checkingFinish());
      }
      localStorage.setItem('at', body.access_token);
      localStorage.setItem('rt', body.refresh_token);
      const user = await getUser();
      if (user.statusCode === 401) {
        return dispatch(checkingFinish());
      }
      dispatch(login({ user }));
    }
    dispatch(login({ user }));
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const getUser = async () => {
  const resp = await fetchWithToken(endPoints.get_user);
  const body = await resp.json();
  return body;
};
