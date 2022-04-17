import { endPoints } from '../../const/endPoints';
import { fetchWithToken } from '../../helpers/fetch';

export const refreshToken = async () => {
  const rt = localStorage.getItem('rt');
  if (!rt) return false;

  const res = await fetchWithToken(endPoints.refresh_token);

  if (res.status === 200) {
    const data = await res.json();
    localStorage.setItem('at', data.access_token);
    localStorage.setItem('rt', data.refresh_token);
    return true;
  }

  return false;
};
