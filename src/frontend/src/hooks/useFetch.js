import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (method, url, body = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body,
        });

        const data = await resp?.data;

        setApiData(data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, apiData, serverError };
};
