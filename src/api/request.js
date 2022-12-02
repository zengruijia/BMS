import axios from 'axios';
import Vue from 'vue';
Vue.use(axios);

const request = axios.create({
	baseURL: '/api', //统一请求前缀
	timeout: 5000,
});

//请求拦截器
request.interceptors.request.use(function (config) {
	return config;
});

//响应拦截器
request.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default request;
