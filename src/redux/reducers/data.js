import * as constants from '../constants';

const initialState = {
    postDatas: [],
    localPostDatas: [],
    postUserCount: 0,
    postDetails: null,
    postComments: [],
};

const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.FETCH_ALL_POSTS: {
            return {
                ...state, postDatas: state.postDatas.length > 0 ? state.postDatas : action.payload,
                postUserCount: state.postUserCount === 0 ? action.payload.filter(item => item.userId === 1).length : state.postUserCount,
                postDetails: null,
            };
        }
        case constants.FETCH_POST_DETAILS: {
            return { ...state, postDetails: action.payload };
        }
        case constants.FETCH_POST_COMMENTS: {
            return { ...state, postComments: action.payload };
        }
        case constants.UPDATE_POST_DETAILS: {
            return {
                ...state,
                postDetails: action.payload,
                postDatas: state.postDatas.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                })
            };
        }
        case constants.DELETE_POST_DETAILS: {
            return {
                ...state,
                postDatas: state.postDatas.filter(item => item.id.toString() !== action.payload),
                postUserCount: state.postUserCount - 1,
            };
        }
        case constants.CREATE_POST_DETAILS: {

            return {
                ...state,
                postDatas: [...state.postDatas, action.payload],
                postUserCount: state.postUserCount + 1,
            };
        }
        default: {
            return state;
        }
    };
};

export { dataReducer };