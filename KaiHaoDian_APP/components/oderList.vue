<template>
	<view :class="{'my-tabs':true,'space-between':''}">
		<view  v-for="(item,index) in getModelData" :key="index" :class="{'tab-item':true,'active':activeIndex==index}" @click="tap(index,item.id)">
			{{item.lable}}
		</view>
	</view>
</template>

<script>
	export default {
		props:['modelData','initIndex'],
		data() {
			return {
				defaultInfo:{
					data:[
						{label:"美食",id:0},
						{label:"饮品",id:1},
						{label:"零售",id:2},
						{label:"娱乐",id:3},
						{label:"其他",id:4},
					],
				},
				activeIndex:0,//默认索引
			}
		},
		computed:{
			getModelData(){
				return this.modelData||this.defaultInfo.data
			},
			formatBe(){
				return this.modelData
						?this.modelData.length>4?true:false
						:false
			}
		},
		methods: {
			tap(index,id){
				this.$emit("changed",index,id)
				this.activeIndex=index;
			},
			/**
			 * @name 初始化activeIndex
			 */
			initActive(){
				this.activeIndex=this.initIndex||this.activeIndex
			}
		},
		created() {
			this.initActive()
			console.log(this.modelData)
		},
	}
</script>
<style lang='scss'>
	.my-tabs {
		height: 90upx;
		font-size: 24upx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		/* border-top: 2upx solid #dddddd;
		border-bottom: 2upx solid #dddddd; */

		overflow-x: auto;
		padding: 0 30upx;
		border-radius:20upx ;
		box-sizing: border-box;
		.tab-item{
			line-height: 90upx;
			padding: 20 0upx;
			box-sizing: border-box;
			text-align: center;
			color:#3d3d3d;
			font-size: 24upx;
			font-weight: bold;
			letter-spacing:5upx;
			
		}
		.tab-item.active{
			font-weight: bold;
			font-size: 24upx;
			position: relative;
			color: #3d3d3d;
			letter-spacing:5upx;
		}
		.tab-item.active::after{
			content: "";
			position: absolute;
			bottom: 0;
			border-radius:20upx; 
			left:50%;
			transform: translateX(-50%);
			width: 100%;
			border-bottom: 6upx solid #ffbd38;
			animation: test ease 1 1.5s;
		}
	}
	.my-tabs.space-between{
		justify-content: space-between;
	}
	@keyframes test{
		0%{width: 100%}
		50%{width: 150%}
		100%{width: 100%}
	}
</style>
