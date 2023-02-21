import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setDataFetch({
        loading: false,
        data: data.results,
      });
    } catch (error) {
      setDataFetch({
        loading: false,
        error: null,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
