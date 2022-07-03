import axios from 'axios';

export default async (options) => {
  try {
    const { data } = await axios(options);
    return { data };
  } catch (err) {
    const { data } = err.response;
    return { data, error: true };
  }
};