import {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';
import client from '../services/client';

interface IState {
  loading: boolean;
  error: boolean;
  data: any;
}

export const useFetch = (url: string) => {
  const [state, setstate] = useState<IState>({
    loading: true,
    error: false,
    data: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await (await client()).get(url);
        if (response.data) {
          setstate({
            ...state,
            data: response.data,
            loading: false,
            error: false,
          });
        } else {
          setstate({...state, error: true, data: null, loading: false});
        }
      } catch (error) {
        console.log(error);
        setstate({...state, error: true, loading: false});
      }
    };
    fetchData();
  }, []);
  return state;
};
