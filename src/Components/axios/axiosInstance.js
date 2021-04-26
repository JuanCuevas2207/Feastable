import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "https://raw.githubusercontent.com/JuanCuevas2207/Feastable/juancuevas/dataFiles/",
    
});

/*axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axiosInstance.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axiosInstance.defaults.headers.common["Authorization"] = "AUTH TOKEN";*/


export default axiosInstance;