<style scoped>
  p img {
			max-width: 100%;
			height: auto;
		}

		.main {
			padding-bottom: 1rem;
		}

		.mui-content>.mui-table-view:first-child {
			margin-top: 0;
		}

		.main_title {
			border-left: 5px solid #0E86FF;
			padding-left: 0.1rem;
			font-size: 0.31rem;
		}

		.main_li1 {
			height: 1.2rem;
			line-height: 0.9rem;
			text-align: left;
		}
		
		.main_li2 {
			height: 2rem;
			line-height: 0.9rem;
		}

		.main_content {
			border: none;
			padding: 0;
		}

		.main_bottom {
			width: 100%;
			height: 1rem;
			position: fixed;
			bottom: 0;
			line-height: 1rem;
			border-top: 1px solid #CDCDCD;
			background-color: #F3F7FA;
			text-align: center;
			color: #006EFF;
		}

		.save {
			display: inline-block;
			width: 32%;
			text-align: center;
			color: #3398FE;
			font-size: 0.31rem;
		}
		
		.saveAsMuban {
			display: inline-block;
			width: 30%;
			text-align: center;
			color: #3398FE;
			border-left: 1px solid #D0D1D1;
			font-size: 0.31rem;
		}
		
		.delete {
			display: inline-block;
			width: 30%;
			text-align: center;
			color: #FC5A4B;
			border-left: 1px solid #D0D1D1;
			font-size: 0.31rem;
		}
		
		.yingxiang {
			text-align: left;
			padding: 0;
			height: auto;
		}
		
		.yingxiang div {
			display: inline-block;
			width: 1.7rem;
			padding: 0.1rem;
		}
		
		.yingxiang img {
			width: 100%;
		}
		
		.deleteImg {
			width: 0.4rem !important;
			position: absolute;
			top: 0.12rem;
			right: 0.11rem;
		}
		.mui-table-view-cell.mui-active{
			background-color: #FFF;
		}
		.imgB{
			height: 1.5rem;
			width: 1.5rem !important;
		}
</style>
<template>
<div class="hello main">
  <header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
		<span class=" mui-icon mui-icon-left-nav mui-pull-left" @click="goback" style="color: #0D85FD;"></span>
		<h1 class="mui-title">添加诊断报告</h1>
		<a href="templet_chos.html"><button class="mui-pull-right" id="choose_btn">模板</button></a>
	</header>
	<div class="mui-content">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell main_li1">
						<span class="main_title">典型影像</span>
					</li>
					<li class="mui-table-view-cell main_li2 yingxiang">
						<div style="position: relative;">
							<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" class="imgB"/>
							<img src="static/images/delete_img@2x.png" alt="" class="deleteImg" @click="deleteImg($event)" />
						</div>
						<div style="position: relative;">
							<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" class="imgB"/>
							<img src="static/images/delete_img@2x.png" alt="" class="deleteImg" @click="deleteImg($event)" />
						</div>
						<div style="position: relative;">
							<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" class="imgB"/>
							<img src="static/images/delete_img@2x.png" alt="" class="deleteImg" @click="deleteImg($event)" />
						</div>
						<div style="position: relative;">
							<img src="static/images/微信图片_20180130143422.png" alt="" data-preview-src="" data-preview-group="1" class="imgB"/>
							<img src="static/images/delete_img@2x.png" alt="" class="deleteImg" @click="deleteImg($event)" />
						</div>
						<div>
							<router-link :to="{ name: 'yingxiang_chos'}"><img src="static/images/yingxiang_add.png" alt="" id="headImage" /></router-link>
						</div>
					</li>
					<li class="mui-table-view-cell main_li1">
						<span class="main_title">检查部位</span>
					</li>
					<li class="mui-table-view-cell main_li2">
						<textarea name="" class="main_content" placeholder="请填写检查部位">头部</textarea>
					</li>
					<li class="mui-table-view-cell main_li1">
						<span class="main_title">影像描述</span>
					</li>
					<li class="mui-table-view-cell main_li2">
						<textarea name="" class="main_content" placeholder="请填写影像描述">股性蝶鞍扩大，1.右输尿管积水；2右肾积水</textarea>
					</li>
					<li class="mui-table-view-cell main_li1">
						<span class="main_title">诊断意见</span>
					</li>
					<li class="mui-table-view-cell main_li2">
						<textarea name="" class="main_content" placeholder="请填写诊断意见">股性蝶鞍扩大，1.右输尿管积水；2右肾积水</textarea>
					</li>
				</ul>
			</div>
			<div class="main_bottom">
				<div class="save" @click="show()" style="color: #007aff;">完成诊断</div>
				<div class="saveAsMuban">
					<a href="target_folder_rep.html">存为模板</a>
				</div>
				<div class="delete">删除报告</div>
			</div>
</div>
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
	    		},
	       	deleteImg:function (event){
	       		var this1=event.currentTarget;
						$(this1).parent().remove();
					}
        },
        mounted:function(){
            
        }

    }

</script>