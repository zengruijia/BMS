const state ={
  isCollapse: false  //控制菜单展开收起
}
const actions = {}
const mutations = {
  // 修改菜单展开收起
  collapseMenu(state){
    state.isCollapse = !state.isCollapse;
  }
}
const getters = {}

export default {
	state,
	actions,
	mutations,
	getters,
};