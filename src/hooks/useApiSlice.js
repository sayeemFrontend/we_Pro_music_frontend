import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { credentials } from '../apis/credentials';

export function useApiSlice(options = { endPoint: '', method: 'get', body: {} }) {
  const [response, setResponse] = useState({ isLoading: true, isError: false, data: [] });
  const { endPoint, method, body } = options;

  const getData = React.useCallback(async () => {
    try {
      let res;
      if (method === 'get') {
        res = await axios({ url: `${credentials.baseUrl}/${endPoint}`, method: 'GET', headers: credentials.getHeaders() });
      } else {
        res = await axios({ url: `${credentials.baseUrl}/${endPoint}`, method: 'GET', headers: credentials.getHeaders(), data: body });
      }
      const { data = {}, status = false } = res || {};
      if (status == 200) {
        setResponse((prev) => ({ ...prev, isLoading: false, data: data.data }));
      } else {
        throw new Error('error in fetching');
      }
    } catch (error) {
      setResponse((prev) => ({ ...prev, isLoading: false, data: [], isError: error.message }));
    }
  }, [endPoint, body, method]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { ...response };
}
