import axios from "axios";

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}/`,
  timeout: 3000,
};

const axiosApiInstance = axios.create(axiosConfig);

export default axiosApiInstance;
