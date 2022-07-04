import requestApi from './requestApi';

const BASE_URL = import.meta.env.VITE_BASE_URL;

async function isAuthenticated() {
  const token = localStorage.getItem('tokenEbytr') || '';

  const options = {
    method: 'GET',
    headers: { authorization: token },
    url: `${BASE_URL}/auth`,
  };

  const response = await requestApi(options);

  return response.error;
}

export default isAuthenticated;