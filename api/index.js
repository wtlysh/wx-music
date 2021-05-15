import http from './request.js'

//歌单详情
export function getMuListDetail(data) {
	return http.request({
		url: '/playlist/detail',
		method: 'GET',
		data
	})
}
//获取推荐歌单
export function getMuList(data) {
	return http.request({
		url:'/top/playlist/highquality',
		method:'GET',
		data
	})
}
//获取热门歌单分类
export function getHotMuList(data) {
	return http.request({
		url:'/top/playlist',
		method:'GET',
		data
	})
}