import http from './request.js'
//单曲
export function apiSong(data) {
	return http.request({
		url: '/song/url',
		method: 'GET',
		data
	})
}
//单曲详情
export function apiSongDetail(data) {
	return http.request({
		url: '/song/detail',
		method: 'GET',
		data
	})
}
//歌词
export function apiLyic(data) {
	return http.request({
		url: '/lyric',
		method: 'GET',
		data
	})
}