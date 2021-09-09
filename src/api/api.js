import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "77b31272-2094-486b-b7d2-b66ff9739961",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
};