import * as constants from '../constants';
import * as request from '../../api/project';

export const getPostDatas = () => async (dispatch) => {

    const { data, success } = await request.getPostDatas();

    if (success) {
        dispatch({ type: constants.FETCH_ALL_POSTS, payload: data, });
    };
};

export const getPostDetails = (id) => async (dispatch) => {

    const { data, success } = await request.getPostDetails(id);

    if (success) {
        dispatch({ type: constants.FETCH_POST_DETAILS, payload: data, });
    };


};

export const getPostComments = (id) => async (dispatch) => {

    const { data, success } = await request.getPostComments(id);

    if (success) {
        dispatch({ type: constants.FETCH_POST_COMMENTS, payload: data, });
    };
};

export const updatePostDetails = (id, newData) => async (dispatch) => {

    const { data, success } = await request.updatePostDetails(id, newData);

    if (success) {
        dispatch({ type: constants.UPDATE_POST_DETAILS, payload: data });
    };
};

export const deletePostDetails = (id) => async (dispatch) => {

    const { success } = await request.deletePostDetails(id);

    if (success) {
        dispatch({ type: constants.DELETE_POST_DETAILS, payload: id });
    };
};

export const createNewPost = (newData) => async (dispatch) => {

    const { data, success } = await request.createNewPost(newData);
    
    if (success) {
        dispatch({ type: constants.CREATE_POST_DETAILS, payload: data });
    };
};
