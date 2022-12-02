import Mock from 'mockjs';

let List = [];
export default {
	getStatisticalData: () => {
		for (let i = 0; i < 7; i++) {
			List.push(
				Mock.mock({
					苹果: Mock.Random.float(100, 8000, 0, 0),
					vivo: Mock.Random.float(100, 8000, 0, 0),
					oppo: Mock.Random.float(100, 8000, 0, 0),
					魅族: Mock.Random.float(100, 8000, 0, 0),
					三星: Mock.Random.float(100, 8000, 0, 0),
					小米: Mock.Random.float(100, 8000, 0, 0),
				})
			);
		}
		return {
			code: 20000,
			data: {
				videoData: [
					{
						name: '小米',
						value: 2999,
					},
					{
						name: 'vivo',
						value: 2999,
					},
					{
						name: 'oppo',
						value: 2999,
					},
					{
						name: '魅族',
						value: 2999,
					},
					{
						name: '三星',
						value: 2999,
					},
					{
						name: '苹果',
						value: 2999,
					},
				],
				tableData: [
					{
						name: '华为',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
					{
						name: '苹果',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
					{
						name: '小米',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
					{
						name: 'oppo',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
					{
						name: 'vivo',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
					{
						name: 'vivo',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
					{
						name: 'vivo',
						todayBuy: 100,
						monthBuy: 300,
						totalBuy: 800,
					},
				],
				tableLabel: {
					name: '课程',
					todayBuy: '今日购买',
					monthBuy: '本月购买',
					totalBuy: '总购买',
				},
				countData: [
					{
						name: '今日支付订单',
						value: 1234,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '今日收藏订单',
						value: 121,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '今日未支付订单',
						value: 1234,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '本月支付订单',
						value: 1234,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '本月收藏订单',
						value: 123,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '本月未支付订单',
						value: 1234,
						icon: 'success',
						color: '#2ec7c9',
					},
				],
				orderData: {
					data: [
						{
							oppo: 2354,
							vivo: 4521,
							三星: 6545,
							小米: 4567,
							苹果: 4568,
							魅族: 4567,
						},
						{
							oppo: 5354,
							vivo: 5521,
							三星: 4545,
							小米: 3567,
							苹果: 1568,
							魅族: 8567,
						},
						{
							oppo: 6354,
							vivo: 5521,
							三星: 6545,
							小米: 4567,
							苹果: 1568,
							魅族: 5567,
						},
						{
							oppo: 5354,
							vivo: 6521,
							三星: 2545,
							小米: 3567,
							苹果: 1568,
							魅族: 5676,
						},
						{
							oppo: 2354,
							vivo: 4521,
							三星: 6545,
							小米: 1567,
							苹果: 6568,
							魅族: 1567,
						},
						{
							oppo: 5354,
							vivo: 4921,
							三星: 6585,
							小米: 5567,
							苹果: 6568,
							魅族: 5567,
						},
						{
							oppo: 7354,
							vivo: 4521,
							三星: 4545,
							小米: 5567,
							苹果: 1568,
							魅族: 3567,
						},
					],
					date: ['20191001', '20191001', '20191001', '20191001', '20191001', '20191001', '20191001'],
				},
			},
		};
	},
};
