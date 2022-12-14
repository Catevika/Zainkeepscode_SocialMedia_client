import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:5000' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`;
	}

	return req;
});

export const updatePost = (id) => API.put(`/post/${id}`);

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);

export const likePost = (id, userId) =>
	API.put(`/post/${id}/like`, { userId: userId });
