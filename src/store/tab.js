const state = {
	isCollapse: false, //控制菜单展开收起
	tabList: [
		{
			path: '/',
			name: 'home',
			label: '首页',
			icon: 's-home',
			url: 'Home/Home',
		},
	], //面包屑数据
};
const actions = {};
const mutations = {
	// 修改菜单展开收起
	collapseMenu(state) {
		state.isCollapse = !state.isCollapse;
	},

	//更新面包屑数据
	selectMenu(state, val) {
		if (val.name !== 'home') {
			const index = state.tabList.findIndex(item => item.name === val.name);
			console.log('index', index);
			if (index === -1) {
				state.tabList.push(val);
			}
		}
	},
};
const getters = {};

export default {
	state,
	actions,
	mutations,
	getters,
};
