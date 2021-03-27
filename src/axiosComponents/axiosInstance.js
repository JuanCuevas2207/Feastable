import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "https://raw.githubusercontent.com/gabrielnievescosson/jsonFile/main" 
});

export default axiosInstance;