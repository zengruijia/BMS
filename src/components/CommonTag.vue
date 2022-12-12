<template>
	<div class="tabs">
		<el-tag :key="item.path" v-for="(item, index) in tags" :closable="item.name !== 'home'" :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changeMenu(item)" @close="handleClose(item, index)">
			{{ item.name }}
		</el-tag>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	methods: {},
	computed: {
		...mapState({
			tags: state => state.tab.tabList,
		}),
	},
	methods: {
		...mapMutations(['closeTag']),
		changeMenu(item) {
			this.$router.push(item.path);
		},

		//删除tag标签
		handleClose(item, index) {
			this.closeTag(item);
			const length = this.tags.length;
			//删除之后的跳转逻辑
			if (item.nmae !== this.$route.name) {
				return;
			}
			//表示删除最后一项
			if (index === length) {
				console.log(this.tags[index - 1].name);
				this.$router.push({
					name: this.tags[index - 1].name,
				});
			} else {
				console.log(this.tags[index].name);
				this.$router.push({
					name: this.tags[index].name,
				});
			}
		},
	},
};
</script>

<style></style>
