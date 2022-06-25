import axios from 'axios';

const userServiceFactory = () => {
    function login(username, password) {
        return axios.post(`/api/auth`, { username, password })
            .then(payload => {
                return payload;
            });
    }

    return {login};
};

module.exports = {
    userServiceFactory
};