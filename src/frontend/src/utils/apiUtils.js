import { toast } from "react-toastify";

export const request = async (apiFunc, ...args) => {
  try {
    const result = await apiFunc(...args);

    return result.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.error || err.message || "Unexpected Error!";
    toast.error(errorMessage);
  }
};
