<template>
	<el-row>
		<el-col :span="8" style="padding-right: 10px">
			<el-card class="box-card">
				<div class="user">
					<img src="" alt="" />
					<div class="userinfo">
						<p class="name">Amdin</p>
						<p class="access">超级管理员</p>
					</div>
				</div>
				<div class="login-info">
					<p><span>上次登陆的时间</span><span>2021-7-19</span></p>
					<p><span>上次登陆的地点</span><span>武汉</span></p>
				</div>
			</el-card>
			<el-card style="margin-top: 20px; height: 460px">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"> </el-table-column>
				</el-table>
			</el-card>
		</el-col>
		<el-col :span="16" style="padding-left: 10px">
			<div class="num">
				<el-card class="el-card" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
					<i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
					<div class="detail">
						<p class="price">￥{{ item.value }}</p>
						<p class="txt">{{ item.name }}</p>
					</div>
				</el-card>
			</div>
			<el-card style="height: 280px">
				<div ref="echarts1" style="width: 100%; height: 280px"></div>
			</el-card>
			<div class="graph">
				<el-card style="height: 260px; width: 48%">
					<div ref="echarts2" style="width: 100%; height: 260px"></div>
				</el-card>
				<el-card style="height: 260px; width: 48%">
					<div ref="echarts3" style="width: 100%; height: 240px"></div>
				</el-card>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import { getData } from '../api/index';
import * as echarts from 'echarts';
export default {
	data() {
		return {
			tableData: [],
			tableLabel: {},
			countData: [],
			orderData: [],
			videoData: [],
		};
	},
	mounted() {
		getData().then(({ data }) => {
			console.log(data.data);
			const { tableData, tableLabel, countData, orderData, videoData } = data.data;
			this.tableData = tableData;
			this.tableLabel = tableLabel;
			this.countData = countData;
			this.videoData = videoData;

			//折线图********************************************************
			const xAxis = Object.keys(orderData.data[0]);
			console.log(xAxis);
			const xAxisData = {
				data: xAxis,
			};

			// 指定图表的配置项和数据
			var echarts1Option = {
				xAxis: xAxisData,
				legend: xAxisData,
				yAxis: {},
				series: [],
			};

			xAxis.forEach(key => {
				echarts1Option.series.push({
					name: key,
					data: orderData.data.map(item => item[key]),
					type: 'line',
				});
			});

			// 基于准备好的dom，初始化echarts实例
			var echarts1 = echarts.init(this.$refs.echarts1);

			console.log(echarts1Option);
			// 使用刚指定的配置项和数据显示图表。
			echarts1.setOption(echarts1Option);

			//柱状图*******************************************************
			var echarts2Option = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
					},
				],
			};

			// 基于准备好的dom，初始化echarts实例
			var echarts2 = echarts.init(this.$refs.echarts2);

			// 使用刚指定的配置项和数据显示图表。
			echarts2.setOption(echarts2Option);

			//饼状图********************************************************
			var echarts3Option = {
				// tooltip: {
				// 	trigger: 'item',
				// },
				color: ['#e3e3e3', '#a43435', '#8a6a47', '#e26647', '#344634', '#654633', '#1e6647'],
				series: [
					{
						data: this.videoData,
            type: 'pie'
					},
				],
			};

			// 基于准备好的dom，初始化echarts实例
			var echarts3 = echarts.init(this.$refs.echarts3);

			// 使用刚指定的配置项和数据显示图表。
			echarts3.setOption(echarts3Option);

			window.onresize = function () {
				echarts1.resize();
				echarts2.resize();
				echarts3.resize();
			};
		});
	},
};
</script>

<style lang="less" scoped>
.user {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid;
	img {
		margin-right: 40px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}
	.userinfo {
		.name {
			font-size: 32px;
			margin-bottom: 10px;
		}
		.userinfo {
			color: #999999;
		}
	}
}
.login-info {
	p {
		line-height: 28px;
		font-size: 14px;
		color: #999999;
		span {
			color: #666666;
			margin-left: 60px;
		}
	}
}

.num {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.icon {
		width: 80px;
		height: 80px;
		font-size: 30px;
		text-align: center;
		line-height: 80px;
		color: #fff;
	}
	.detail {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 15px;
		.price {
			font-size: 30px;
			margin-bottom: 10px;
			line-height: 30px;
			height: 30px;
		}
		.txt {
			font-size: 14px;
			color: #999999;
			text-align: center;
		}
	}
	.el-card {
		width: 32%;
		margin-bottom: 20px;
	}
}

.graph {
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}
</style>
