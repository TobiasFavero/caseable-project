import { useState } from "react";

export const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result.data);
    } catch (err) {
      setError(err?.response?.data?.error || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
