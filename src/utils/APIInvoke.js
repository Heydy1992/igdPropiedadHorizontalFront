import config from '../config';

const axios = require('axios');

const login = (user, callback) => {
    axios.post(config.api.baseURL+"/api/Auth/login", user)
        .then((res) => {
            callback(res);
        })
        .catch((err) => {
            callback(err);
        })

};

const register = (user, callback) => {
    axios.post(config.api.baseURL+"/api/Auth/register", user)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })

};


const validation = (token, callback) => {
    axios({
        method: "get",
        url: config.api.baseURL+"/user/valid/token",
        headers:{
            Authorization: "Bearer" + token,
            "Content-Type":"application/json"
        },
    }).then((resp) => {
        callback(resp);
    }).catch((error) => {
        callback(error);
    });
}


export {
    login,
    register,
    validation,
}