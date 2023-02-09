import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDataFetch({
        loading: false,
        data: data.results,
        error: null,
      }));
  }, [url]);

  return dataFetch;
};

export default useFetch;
