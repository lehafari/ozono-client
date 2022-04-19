import Swal from 'sweetalert2';
import PopupError from '../components/common/Popup/PopupError';
import PopupOk from '../components/common/Popup/PopupOk';
import { endPoints } from '../const/endPoints';
import { types } from '../context/types/types';
import {
  fetchWithoutToken,
  fetchWithRefreshToken,
  fetchWithToken,
} from '../helpers/fetch';

export const startLogin = (userOrEmail, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      endPoints.signin,
      { userOrEmail, password },
      'POST'
    );
    const body = await resp.json();
    if (resp.status === 200) {
      localStorage.setItem('at', body.access_token);
      localStorage.setItem('rt', body.refresh_token);
      const user = await getUser();
      //ejecutamos el dispatch 1.5s despues de que salga el popup
      setTimeout(() => {
        dispatch(
          login({
            user,
          })
        );
      }, 1500);
      // Popup de inicio exitoso. Se ejecuta 1.5s antes del dispatch para que el usuario vea el popup.
      PopupOk('22rem', 'success', 'Inicio de sesion exitoso');
    } else {
      console.log(body.message);
      PopupError(body.message);
    }
    if (resp.status !== 201) {
      console.log('entre al if', body.message);
      return PopupError(body.message);
    }
    localStorage.setItem('at', body.access_token);
    localStorage.setItem('rt', body.refresh_token);
    const user = await getUser();
    //ejecutamos el dispatch 1.5s despues de que salga el popup
    setTimeout(() => {
      dispatch(
        login({
          user,
        })
      );
    }, 1500);
    // Popup de registro exitoso. Se ejecuta 1.5s antes del dispatch para que el usuario vea el popup.
    PopupOk('28rem', 'success', 'Se registró con exito');
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

const checkingFinish = () => ({ type: types.authCheckingFinish, payload: {} });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken(endPoints.logout, {}, 'PUT');
    const body = await resp.json();
    localStorage.clear();
    //Ejecutamo el dispatch 1.5s despues de que salga el popup
    setTimeout(() => {
      dispatch(logout());
    }, 1500);
    // Popup de cierre de sesion exitoso. Se ejecuta 1.5s antes del dispatch para que el usuario vea el popup.
    PopupOk('28rem', 'info', 'Sesion cerrada con exito');
  };
};

const logout = () => ({ type: types.authLogout, payload: {} });

const getUser = async () => {
  const resp = await fetchWithToken(endPoints.get_user);
  const body = await resp.json();
  return body;
};
