import axios from 'axios';

export const baseURL: string = 'http://46.101.108.59/api';

export default async () => {
  const instance = axios.create();
  instance.defaults.baseURL = baseURL;
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.timeout = 10000;

  // Here we can add any interceptor so that you can keep track of the request.
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => Promise.reject(error),
  );
  return instance;
};
