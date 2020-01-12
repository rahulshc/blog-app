import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json';

//request here is request config
axios.interceptors.request.use(request => {
    //console.log(request);

    return request;//otherwise we shall block the request
}, //catches error while sending request
 error => {
    //error can be logged into a file
    //console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    //console.log(responsse);

    return response;//otherwise we shall block the request
}, //catches error while receving response
 error => {
    //error can be logged into a file
    //console.log(error);
    return Promise.reject(error); //we handle this error in component
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
