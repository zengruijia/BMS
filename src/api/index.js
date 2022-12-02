import request from './request'

//首页数据
export const getData = () => request.get('/home/getData')