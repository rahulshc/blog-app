import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//instance will overwrite the missing or existing properties index.js
instance.defaults.headers.common['Authorization']='AUTH TOKEN IN INSTANCE';

export default instance;