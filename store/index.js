import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	isplayingmusic: false,
	isplayactive:false,
	playdetail:'',
	audiolist:[],
	topHeight: 0,
}
const getters = {
	isplayingmusic(state) {
		return state.isplayingmusic
	},
	isplayactive(state) {
		return state.isplayactive
	},
	playdetail(state){
		return state.playdetail;
	},
	audiolist(state) {
		return state.audiolist
	},
	topHeight(state){
		return state.topHeight
	}
}
const mutations = {
	setIsplayingmusic(state, param) {
		state.isplayingmusic = param
	},
	setIsplayactive(state, param) {
		state.isplayactive = param
	},
	setPlaydetail(state, param){
		state.playdetail = param
	},
	setAudiolist(state, param) {
		state.audiolist = param
	},
	setTopHeight(state, param){
		state.topHeight = param
	}
}
const actions = {
	isplayingmusicAction(context, param) {
		context.commit('setIsplayingmusic', param)
	}
}
const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})

export default store
