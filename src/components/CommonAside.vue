<template>
	<!-- <el-col :span="12"> -->
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
		<h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
		<el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
			<i :class="`el-icon-${item.icon}`"></i>
			<span slot="title">{{ item.label }}</span>
		</el-menu-item>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>{{ hasChildren[0].label }}</span>
			</template>
			<el-menu-item-group>
				<el-menu-item v-for="subItem in hasChildren[0].children" :key="subItem.name" :index="subItem.name">{{ subItem.label }}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
	<!-- </el-col> -->
</template>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
.el-menu {
	height: 100vh;
	border-right: none;
	h3 {
		color: #fff;
		text-align: center;
		line-height: 48px;
		font-size: 16px;
		font-weight: 400;
	}
}
</style>

<script>
export default {
	data() {
		return {
			menuData: [
				{
					path: '/',
					name: 'home',
					label: '首页',
					icon: 's-home',
					url: 'Home/Home',
				},
				{
					path: '/mall',
					name: 'mall',
					label: '商品管理',
					icon: 's-shop',
					url: 'MallManage/MallManage',
				},
				{
					path: '/user',
					name: 'user',
					label: '用户管理',
					icon: 's-custom',
					url: 'UserManage/UserManage',
				},
				{
					label: '其他',
					icon: 'lcoatlom',
					children: [
						{
							path: '/page1',
							name: 'page1',
							label: '页面1',
							icon: 'setting',
							url: 'Other/PageOne',
						},
						{
							path: '/page2',
							name: 'page2',
							label: '页面2',
							icon: 'setting',
							url: 'Other/PageTwo',
						},
					],
				},
			],
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},

		//菜单点击事件
		clickMenu(item) {
			if (this.$route.path !== item.path && !(this.$route.path === '/home' && item.path === '/')) {
				console.log(this.$route);
				this.$router.push(item.path);
			}
			this.$store.commit('selectMenu', item);
		},
	},
	computed: {
		//没有子菜单
		noChildren() {
			return this.menuData.filter(item => !item.children);
		},
		//有子菜单
		hasChildren() {
			return this.menuData.filter(item => item.children);
		},
		isCollapse() {
			return this.$store.state.tab.isCollapse;
		},
	},
};
</script>
