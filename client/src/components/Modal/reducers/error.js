import { handleActions } from 'redux-actions';

import modalActionCreators from '../actions';

let initialState = null;

const error = handleActions(
    {
        [modalActionCreators.openModal]: (state, action) => {
            return action.payload;
        },
        [modalActionCreators.closeModal]: () => {
            return null;
        },
    },
    initialState
);

export default error;