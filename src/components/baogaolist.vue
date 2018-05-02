<style scoped>
 html,
		body,
		.mui-content,
		.mui-slider,
		.mui-slider-group {
			height: 100%;
		}
		
		html,
		body,
		{
			background: #F0F0F0;
		}
		
		.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
			border-top: none;
		}
		
		.xiangqing {
			margin: 0.15rem;
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
			text-align: left;
		}
		
		.mui-media-object {
			width: auto !important;
		}
		
		.doc_info {
			margin-top: 0.2rem;
		}
		
		.mui-ellipsis {
			margin: 0 !important;
		}
		
		.mui-segmented-control .mui-control-item {
			height: 1rem;
			line-height: 1rem;
		}
		
		.zhejiao {
			width: 0.2rem !important;
			position: absolute;
			bottom: -0.02rem;
			right: -0.02rem;
		}
		
		#item1,
		#item2 {
			overflow: auto;
			height: 100%;
			padding-bottom: 1rem;
		}
		.mui-media-body{
			text-align: left;
		}
	 	.fade-enter-active, .fade-leave-active {
		    transition: opacity .5s;
	  	}
	  	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		    opacity: 0;
	  	}
		
</style>
<template>
<transition name="slide-fade">
<div class="hello">
  		<header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
			<span class=" mui-icon mui-icon-left-nav mui-pull-left" @click="goback" style="color:#0D85FD;"></span>
			<h1 class="mui-title">诊断报告</h1>
			<router-link :to="{ name: 'addRep_yingXiang'}"><button class="mui-pull-right" id="choose_btn">写报告</button></router-link>
		</header>
		<div class="mui-content">
			<div class="report_suolue">
				<a href="addRep_yingXiang.html" style="color: #050505;">
					<p class="xiangqing">
						<span>检查部位:</span>
						<span>垂体瘤</span>
					</p>
					<p class="xiangqing">
						<span>诊断意见:</span>
						<span>股性蝶鞍扩大，1.右输尿管积水；2阿斯顿萨达.右肾积水</span>
					</p>
					<div class="doc_info">
						<img class="mui-media-object mui-pull-left" src="static/images/videocloud_template.png">
						<div class="mui-media-body" style="padding-top: 0.05rem;">
							贾宇翔
							<p class='mui-ellipsis'>
								<span>左云县人民医院 </span>
								<span style="width:auto;margin-left: 0.1rem;" class="mui-pull-right">2017-01-01 15:20</span>
							</p>
						</div>
					</div>
					<img src="static/images/zhejiao.png" class="zhejiao" />
				</a>
			</div>
			<div class="report_suolue">
				<a href="addRep_yingXiang.html" style="color: #050505;">
					<p class="xiangqing">
						<span>检查部位:</span>
						<span>垂体瘤</span>
					</p>
					<p class="xiangqing">
						<span>诊断意见:</span>
						<span>股性蝶鞍扩大，1.右输尿管积水；2阿斯顿萨达.右肾积水</span>
					</p>
					<div class="doc_info">
						<img class="mui-media-object mui-pull-left" src="static/images/videocloud_template.png">
						<div class="mui-media-body" style="padding-top: 0.05rem;">
							贾宇翔
							<p class='mui-ellipsis'>
								<span>左云县人民医院 </span>
								<span style="width:auto;margin-left: 0.1rem;" class="mui-pull-right">2017-01-01 15:20</span>
							</p>
						</div>
					</div>
					<img src="static/images/zhejiao.png" class="zhejiao" />
				</a>
			</div>
			<div class="report_suolue">
				<a href="addRep_yingXiang.html" style="color: #050505;">
					<p class="xiangqing">
						<span>检查部位:</span>
						<span>垂体瘤</span>
					</p>
					<p class="xiangqing">
						<span>诊断意见:</span>
						<span>股性蝶鞍扩大，1.右输尿管积水；2阿斯顿萨达.右肾积水</span>
					</p>
					<div class="doc_info">
						<img class="mui-media-object mui-pull-left" src="static/images/videocloud_template.png">
						<div class="mui-media-body" style="padding-top: 0.05rem;">
							贾宇翔
							<p class='mui-ellipsis'>
								<span>左云县人民医院 </span>
								<span style="width:auto;margin-left: 0.1rem;" class="mui-pull-right">2017-01-01 15:20</span>
							</p>
						</div>
					</div>
					<img src="static/images/zhejiao.png" class="zhejiao" />
				</a>
			</div>
		</div>
</div>
</transition>
</template>

<script>
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
    			}
        }

    }

</script>
<!--<script>-->


<!--</script>-->