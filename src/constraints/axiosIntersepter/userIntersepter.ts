import axios, { AxiosError, AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_PUBLIC_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {    
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.get('')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });