export default {
    getUserRequest: () => {
        return {
            url: '/api/auth/user',
            method: 'get',
            headers: {}
        };
    },
    loginRequest: (payload) => {
        return {
            url: '/api/auth/login',
            method: 'post',
            data: payload,
            headers: {}
        };
    },
    registerRequest: (payload) => {
        return {
            url: '/api/auth/register',
            method: 'post',
            data: payload,
            headers: {}
        };
    },
    updateUserRequest: (payload) => {
        return {
            url: '/api/auth/user/' + payload.user._id,
            method: 'put',
            headers: {},
            data: payload
        };
    }

};