import Reactotron from 'reactotron-react-native';

export default {
    getFilmsRequest: (params) => {
        return {
            url: '/api/films',
            method: 'get',
            headers: {},
            params
        };
    },
    getFilmRequest: (params) => {
        return {
            url: '/api/films/' + params.id,
            method: 'get',
            headers: {}
        };
    },
    saveFilmRequest: (payload) => {
        return {
            url: '/api/films',
            method: 'post',
            data: payload,
            headers: {}
        };
    },
    updateFilmRatingRequest: (payload) => {
        return {
            url: '/api/films/' + payload.filmId + '/rating',
            method: 'put',
            headers: {},
            data: payload
        };
    },
    updateFilmRequest: (payload) => {
        return {
            url: '/api/films/' + payload.film._id,
            method: 'put',
            headers: {},
            data: payload
        };
    }
};