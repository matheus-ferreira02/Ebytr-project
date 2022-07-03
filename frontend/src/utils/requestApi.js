import axios from 'axios';

export default async (options) => {
  try {
    const { data } = await axios(options);
    return { data };
  } catch (err) {
    const { data, status } = err.response;
    return { data, status, error: true };
  }
};