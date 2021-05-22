import axios from 'axios';

const authenticationAxios = axios.create({
    baseURL : "https://identitytoolkit.googleapis.com/v1/",
    
});

export default authenticationAxios;