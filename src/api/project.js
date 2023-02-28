import { endPoints } from "./endpoint";
import { Request } from "./service";

export const getPostDatas = async () => {
    const response = await Request(endPoints.posts, "GET");
    return response;
};

export const getPostDetails = async (id) => {
    const response = await Request(endPoints.posts, "GET", id);
    return response;
};

export const getPostComments = async (id) => {
    const response = await Request(endPoints.posts, "GET", id, endPoints.postComment);
    return response;
};

export const updatePostDetails = async (id, newData) => {
    const response = await Request(endPoints.posts, "PUT", id, undefined, newData);
    return response;
};

export const deletePostDetails = async (id) => {
    const response = await Request(endPoints.posts, "DELETE", id);
    return response;
};

export const createNewPost = async (newData) => {
    const response = await Request(endPoints.posts, "POST", undefined, undefined, newData);
    return response;
};