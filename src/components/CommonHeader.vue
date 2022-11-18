<template>
	<div class="header-container">
		<div class="l">
			<el-button icon="el-icon-menu" size="mini" @click="changeMenu"></el-button>
			<!-- 面包屑 -->
			<span class="text">首页</span>
		</div>
		<div class="r">
			<el-dropdown>
				<span class="el-dropdown-link">
          <img class="headerImg" src="" alt="">
        </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
  methods:{
    changeMenu(){
      this.$store.commit('collapseMenu')
    }
  }
};
</script>

<style lang="less" scoped>
.header-container {
	padding-left: 20px;
	background-color: #333;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.text {
		color: #fff;
		font-size: 14px;
		margin-left: 14px;
	}
  .headerImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
