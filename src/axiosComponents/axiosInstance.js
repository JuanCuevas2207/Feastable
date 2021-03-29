import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "https://raw.githubusercontent.com/JuanCuevas2207/Feastable/gabrielnieves/dataFiles/" 
});

export default axiosInstance;