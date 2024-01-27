import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://localhost3000',
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