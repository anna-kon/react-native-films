import { createAction } from 'redux-actions';

const profileActionCreators = {
    updateUserRequest: createAction('UPDATE_USER_REQUEST'),
    updateUserSuccess: createAction('UPDATE_USER_SUCCESS'),
    updateUserError: createAction('UPDATE_USER_ERROR'),
    startRefreshing: createAction('START_PROFILE_REFRESHING'),
    uploadAvatar: createAction('UPLOAD_AVATAR'),
    startUploadingImage: createAction('START_UPLOADING_IMAGE'),
    endUploadingImage: createAction('END_UPLOADING_IMAGE')
};

export default profileActionCreators;