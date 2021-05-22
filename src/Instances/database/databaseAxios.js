import axios from 'axios';

const databaseAxios = axios.create({
    baseURL : "https://feastable-react-default-rtdb.firebaseio.com/",
    
});

export default databaseAxios;