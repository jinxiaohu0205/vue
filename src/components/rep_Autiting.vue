<template>
	<div class="hello">
		<header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
			<span class=" mui-icon mui-icon-left-nav mui-pull-left" @click="goback" style="color:#0D85FD;"></span>
			<h1 class="mui-title">报告审核</h1>
			<!--<router-link :to="{ name: 'addRep_yingXiang'}"><button class="mui-pull-right" id="choose_btn">写报告</button></router-link>-->
		</header>
		<div class="mui-content">
			<div class="tab_top" style="background: #FFFFFF;">
				<div id="weishen" style="color: #0E86FF;" @click="weishen">待审核</div>
				<div id="yishen" @click="yishen">已审核</div> 
			</div>
			<div class="blue_bot1"></div>
			<div class="blue_bot2"></div>
			<p style="height:1.1rem;padding-top: 0.2rem;margin: 0;background: #FFFFFF;">
				<a class="searchYx">
					<img src="static/images/search.png" alt="" id="search_btn" />
					<input type="text" class="mui-search" placeholder="请输入患者姓名或者拼音" />
					<span class="mui-icon mui-icon-close" @click="clear"></span>
				</a>
			</p>
			<div id="item1" class="">

				<div class="report_suolue">
					<p class="xiangqing">
						<span>检查部位:</span><span>垂体瘤</span>
					</p>
					<span class="mui-icon mui-icon-more more_fuc" @click="show($event)"></span>
					<div class="more_caozuo">
						<img src="static/images/window_sanjiao@2x.png" class="sanjiao" />
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<a href="yuepian.html" style="padding-left: 1rem;">
									<img src="static/images/videocloud_readfile@2x.png" class="more_fuc_img" /> 阅片
								</a>
							</li>

							<li class="mui-table-view-cell">
								<a href="ill_his.html" style="padding-left: 1rem;">
									<img src="static/images/videocloud_report@2x.png" class="more_fuc_img" /> 病史
								</a>
							</li>
						</ul>
					</div>
					<p class="xiangqing">
						<span>诊断意见:</span>
						<span>股性蝶鞍扩大，1.右输尿管积水；2阿斯顿萨达.右肾积水</span>
					</p>
					<p class="xiangqing">
						<span>诊断时间:</span><span>2017-10-08 17:50</span>
					</p>
					<div class="doc_info">
						<div class=" mui-pull-left yingX_img" style="">CT</div>
						<div class="mui-media-body" style="padding-top: 0.05rem;margin-top: 0.1rem;">
							<p class='mui-ellipsis'><span>和据知</span> <span>左权县人民医院</span><span class="mui-pull-right">2017-01-01</span></p>
						</div>
					</div>
					<p style="text-align: center;margin: 0;">
						<button class="Autiting" @click="autiting">审核</button>
						<button class="Autiting" @click="autiting2">审核2</button>
					</p>
					<img src="static/images/zhejiao.png" class="zhejiao" />
				</div>
			</div>
		</div>
	</div>
</template>
		<script>
			mui.init();
			
			export default {
			  name: 'rep_Autiting',
			  data () {
			    return {
			      msg: 'Welcome to Your Vue.js App'
			    }
			},
			  methods:{
			  	 goback:function(){
	    			this.$router.go(-1);
    			},
			  	show:function(event){
			  		event.stopPropagation();
					var mask = mui.createMask(function() {
						$(".more_caozuo").hide();
					}); //callback为用户点击蒙版时自动执行的回调；
					mask.show(); //显示遮罩v
					//mask.close();//关闭遮罩
					console.log(event.currentTarget)
					$(event.currentTarget).next().show();
				},
				clear:function(){
					$(".mui-search").val("");
				},
				autiting:function(){
					event.stopPropagation();
					this.$router.push("/hu");
				},
				autiting2:function(){
					event.stopPropagation();
					window.open("https:www.baidu.com");
//					location.href="https:www.baidu.com";
				},
				weishen:function(){
					$("#weishen").css("color", "#0E86FF");
					$("#yishen").css("color", "#000");
					$(".blue_bot1").css("background-color", "#0E86FF");
					$(".blue_bot2").css("background-color", "#FFFFFF");
					$("#item1").show();
					$("#item2").hide();
				},
				yishen:function(){
					$("#yishen").css("color", "#0E86FF");
					$("#weishen").css("color", "#000");
					$(".blue_bot2").css("background-color", "#0E86FF");
					$(".blue_bot1").css("background-color", "#FFFFFF");
					$("#item1").hide();
					$("#item2").show();
				}
			  }
			}
			
		</script>
<style scoped>
html,
		body,
		.mui-content,
		.mui-slider,
		.mui-slider-group {
			height: 100%;
		}
		
		.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
			border-top: none;
		}
		
		.report_suolue {
			width: 96%;
			height: auto;
			margin-left: 2%;
			margin-top: 0.2rem;
			margin-bottom: 0.1rem;
			padding: 3%;
			border: 1px solid #DADEE5;
			border-radius: 8px;
			position: relative;
			background: #FFFFFF;
		}
		
		.mui-bar-nav {
			box-shadow: none;
			border-bottom: 1px solid #DDD;
		}
		
		.xiangqing {
			margin-bottom: 0rem;
			text-align: left;
		}
		
		.xiangqing span:nth-child(1) {
			overflow: hidden;
			display: inline-block;
		}
		
		.xiangqing span:nth-child(2) {
			white-space: nowrap;
			overflow: hidden;
			display: inline-block;
			width: 75%;
			color: #282828;
			text-overflow: ellipsis;
		}
		
		.more_fuc {
			position: absolute;
			top: 0.1rem;
			right: 0.2rem;
			color: #808080;
		}
		
		.more_caozuo {
			position: absolute;
			top: 25%;
			right: 3%;
			width: 2.5rem;
			z-index: 9991 !important;
			display: none;
			border: 1px solid #FFF;
			border-radius: 2%;
			background-color: #FFF;
		}
		
		.sanjiao {
			position: absolute;
			top: -0.2rem;
			right: 0.1rem;
			z-index: 9992;
			width: 0.4rem !important;
		}
		
		.more_fuc_img {
			width: 0.4rem !important;
			position: absolute;
			top: 0.2rem;
			left: 0.4rem;
		}
		
		.doc_info {
			border-top: 1px solid #CCCCCC;
			padding-top: 0.1rem;
			margin-bottom: 0.1rem;
		}
		
		.yingX_img {
			width: 0.5rem !important;
			height: 0.5rem !important;
			line-height: 0.5rem !important;
			margin: 0;
			margin-right: 0.1rem !important;
			margin-top: 0.1rem;
			background: #0E86FF;
			color: #FFF;
			text-align: center;
			border-radius: 10%;
			font-size: 0.3rem;
		}
		
		.zhejiao {
			width: 0.2rem !important;
			position: absolute;
			bottom: -0.02rem;
			right: -0.02rem;
		}
		
		.mui-ellipsis {
			margin: 0 !important;
		}
		
		.Autiting {
			width: 1.8rem !important;
			margin: 0 auto;
			border-radius: 0.5rem;
			background: #F88E07;
			color: #FEFFFF;
			border: none;
			margin-top: 0.1rem;
		}
		
		.mui-segmented-control .mui-control-item {
			height: 1rem;
			line-height: 1rem;
		}
		/*选项卡切换*/
		
		.tab_top {
			width: 100%;
			margin-bottom: -15px;
		}
		
		.tab_top div {
			width: 49%;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			display: inline-block;
			color: #000;
		}
		
		.blue_bot1 {
			display: inline-block;
			width: 49%;
			height: 2px;
			background: #0E86FF;
		}
		
		.blue_bot2 {
			display: inline-block;
			width: 49%;
			height: 2px;
			background: #FFFFFF;
		}
		.searchYx {
			background: #F3F7FA;
			display: inline-block;
			height: 0.8rem;
			width: 90%;
			margin-left: 5%;
			padding-left: 0.2rem;
			border-radius: 5px;
			position: relative;
		}
		
		.searchYx input {
			background: #F3F7FA;
			height: 0.8rem;
			color: #0F090B;
			margin: 0;
		}
		
		.mui-search {
			display: inline-block;
			width: auto !important;
			border: none !important;
			margin: 0 !important;
		}
		.mui-icon-close{
			color: #000;
			position: absolute;
			top: .16rem;
			right: .16rem;
			font-size: 0.45rem;
		}

				
</style>