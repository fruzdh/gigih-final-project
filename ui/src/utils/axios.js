import axios from "axios";

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}/`,
};

const axiosApiInstance = axios.create(axiosConfig);

export default axiosApiInstance;
