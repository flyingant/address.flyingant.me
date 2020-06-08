import axios from 'axios';

export const requestAPI = ({ headers }) => {
  return axios.create({
    baseURL: ``,
    timeout: 6000,
    headers,
  });
};

export default {
  requestAPI,
};
