<template>
	<div class="hello">
		<header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
			<span  class=" mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></span>
			<h1 class="mui-title">报告统计</h1>
			<button class="mui-pull-right" id="shaixuan" @click="shaixuan($event)">筛选</button>
			<button class="mui-pull-right" id="shouqi" @click="shouqi($event)" style="display: none;">收起</button>
		</header>
		<div class="mui-content top">
			<div class="chos_time">
				<p class="time">诊断时间</p>
				<p style="margin-top: 0.1rem;">
					<button @click="buxianT($event)" id="time_buxian" class="bianse">不限</button>
					<input type="date" class="time_btn" id="inpstart" @click="xuanzhong1($event)" placeholder="开始时间" value="" /> 至
					<input type="date" class="time_btn" id="inpend" @click="xuanzhong1($event)" placeholder="结束时间" />
				</p>
			</div>

			<button class="finish_btn">完成</button>
		</div>

		<div class="mui-content">
			<div style="background: #FFFFFF;">
				<p class="BYTJ"><span>本院统计</span></p>
				<div id="my_box"></div>
				<span class="mui-pull-right zongji">总计:258份</span>
				<p class="BYTJ">
					<span>科室统计</span>
					<!--<span class="keshi_chose">核磁 <img src="../images/arrow_bottom@2x.png" alt="" style="width: 0.25rem;"/>
					</span>-->
					<select name="" class="mui-pull-right">
						<!--<option value="">选择科室v</option>-->
						<option value="">不限 v</option>
						<option value="">核磁</option>
						<option value="">CT</option>
						<option value="">普放</option>
					</select>
				</p>
				
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<img class="mui-media-object mui-pull-left" src="static/images/touxiang.jpg">
					<div class="mui-media-body">
						卢少雄
						<p class="mui-ellipsis">主任医师</p>
					</div>
					<span class="tongji_num">16</span>
				</li>
				<li class="mui-table-view-cell mui-media">
					<img class="mui-media-object mui-pull-left" src="static/images/touxiang.jpg">
					<div class="mui-media-body">
						李少鹏	
						<p class="mui-ellipsis">副主治医师</p>
					</div>
					<span class="tongji_num">8</span>
				</li>
				<li class="mui-table-view-cell mui-media">
					<img class="mui-media-object mui-pull-left" src="static/images/touxiang.jpg">
					<div class="mui-media-body">
						梁宙
						<p class="mui-ellipsis">主治医师</p>
					</div>
					<span class="tongji_num">14</span>
				</li>
				<li class="mui-table-view-cell mui-media">
					<img class="mui-media-object mui-pull-left" src="static/images/touxiang.jpg">
					<div class="mui-media-body">
						贾宇翔
						<p class="mui-ellipsis">院长</p>
					</div>
					<span class="tongji_num">100</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts'
//var echarts = require('echarts');
var mask = mui.createMask(function() {
	//alert("dd")
	$(".top").hide();
	$("#choose_btn").show();
	$("#shaixuan").show();
	$("#shouqi").hide();
	//mask.close();//关闭遮罩
}); //callback为用户点击蒙版时自动执行的回调；
export default {
        name: 'hello',
        data () {
            return {
                msg: []
            }
        },
        methods:{
        	goback:function(){
	    			this.$router.go(-1);
			},
        	shaixuan:function(event) {
				$(".top").show();
				$(event.target).hide();
				$("#shouqi").show();
				$("#choose_btn").hide();
				$("header").css("z-index", "2098")
				//创建遮罩层

				mask.show(); //显示遮罩
			},
			shouqi:function(event) {

				mask.close();
				$(event.target).hide();
				$("#choose_btn").show();
				$("#shaixuan").show();
				$(".top").hide();
			},
			xuanzhong1:function(event){
				$(event.target).addClass("bianse");
				$("#time_buxian").removeClass("bianse");
			},
			buxianT:function(event){
				$(event.target).addClass("bianse")
				$("#inpstart").removeClass("bianse");
				$("#inpend").removeClass("bianse");
				$(".type_btn button").removeClass("bianse");
				$(event.target).addClass("bianse");
				$(".time_btn").val(''); 
			}
        },
          created:function(){
 
          },
        mounted:function(){
           var myChart = echarts.init(document.getElementById('my_box'));
				myChart.title = '环形图';

				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['核磁', 'CT', '普放', '到底']
					},
					color: ['#F95645', '#40D8C1 ', '#0E86FF','#000'],
					series: [{
						name: '科室',
						type: 'pie',
						radius: ['30%', '80%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '15',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: [{
								value: 108,
								name: '核磁'
							},
							{
								value: 56,
								name: 'CT'
							},
							{
								value: 94,
								name: '普放'
							},
							{
								value: 20,
								name: '到底'
							},
						]
					}]
				});
   
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	html,
	body,
	.mui-content,
	.mui-slider,
	.mui-slider-group {
		height: 100%;
	}
	
	.bianse {
		border-color: #0F87FE !important;
		color: #0F87FE !important;
	}
	
	#choose_btn {
		margin-top: 0.5rem !important;
		border: none;
		color: #1A8BFE;
	}
	
	.mui-media-object {
		width: auto !important;
	}
	
	.mui-segmented-control .mui-control-item {
		height: 1rem;
		line-height: 1rem;
	}
	
	.top {
		width: 100%;
		position: fixed;
		top: 44px;
		z-index: 9999;
		padding-top: 0 !important;
		padding-bottom: 0.2rem;
		display: none;
		height: auto;
	}
	
	.chos_time {
		padding: 0.2rem;
	}
	
	.chos_time p:last-child {
		height: 0.7rem;
		line-height: 0.7rem;
	}
	
	.chos_time button {
		margin-left: 0.1rem;
		width: 1.5rem;
	}
	
	.time {
		color: #666666;
		padding-left: 0.05rem;
	}
	
	.time_btn {
		width: 2.1rem !important;
		margin-bottom: 0 !important;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
		height: 33px !important;
		font-size: 15px;
		padding: 0 !important;
		text-align: center;
	}
	
	.top p {
		margin: 0;
	}
	
	.type_btn {
		margin-top: 0.1rem !important;
	}
	
	.type_btn button {
		width: 1.5rem;
		margin-left: 0.1rem;
		margin-bottom: 0.2rem;
	}
	
	.finish_btn {
		width: 96%;
		margin-left: 2%;
		color: #040404;
		height: 0.7rem;
	}
	
	#jedatebox {
		left: 80px !important;
	}
	
	#my_box {
		width: 100%;
		height: 4.5rem;
		z-index: 999;
		padding: 0.8rem;
		padding-top: 0.1rem;
	}
	
	.zongji {
		position: absolute;
		top: 4.5rem;
		right: 0.2rem;
	}
	
	.BYTJ {
		height: 0.8rem;
		line-height: 0.8rem;
		margin: 0;
		color: #0F090B;
		padding-left: 0.2rem;
		border-bottom: 1px solid #E1E1E1;
		text-align: left;
	}
	
	.BYTJ span:first-child {
		padding-left: 0.15rem;
		border-left: 4px solid #0E86FF;
	}
	
	.keshi_chose {
		float: right;
		margin-right: 0.2rem;
	}
	
	.tongji_num {
		position: absolute;
		top: 0.45rem;
		right: 0.2rem;
	}
	
	.keshi_show {
		width: 2.5rem;
		height: 2.5rem;
		z-index: 9999;
		position: absolute;
		top: 7rem;
		right: 0.2rem;
		border: 1px solid #DDDDDD;
		border-radius: 3%;
		background: #FFF;
		display: none;
	}
	
	.keshi_show p {
		margin: 0;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		font-size: 0.33rem;
		color: #030303;
		border-top: 1px solid #DDDDDD;
	}
	
	.sanjiao1 {
		position: absolute;
		top: 6.8rem;
		right: 0.2rem;
		z-index: 99999;
		display: none;
	}
	
	select {
		display: inline-block;
		width: auto;
		margin: 0;
		height: 0.78rem;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-table-view .mui-media, .mui-table-view .mui-media-body {
	    overflow: hidden;
	    text-align: left;
	}
</style>