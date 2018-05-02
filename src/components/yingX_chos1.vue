<style scoped>
  
html,
		body {
			background: #F7F7F7;
		}
		
		header a {
			color: #0E85FE !important;
		}
		
		.navbar-item .back-ico:before,
		.navbar-item .next-ico:before {
			color: #0E85FE;
		}
		
		.main {
			padding-bottom: 1.2rem;
		}
		
		.mui-popup-button.mui-popup-button-bold {
			font-weight: normal;
		}
		
		header .mui-pull-left {
			position: absolute;
			left: 0.25rem;
			top: 0.25rem;
			color: #0D85FD;
		}
		
		.share_div1 {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			/*color: #000;*/
		}
		
		.share_div1 .mui-media-body {
			font-size: 0.28rem;
		}
		
		.share_div1 img {
			width: 0.4rem;
		}
		
		.mui-checkbox input[type=checkbox]:before,
		.mui-radio input[type=radio]:before {
			position: absolute;
			top: 0.08rem;
			left: -0.4rem;
		}
		
		.bottom_div {
			width: 100%;
			height: 1.5rem;
			padding-top: 0.1rem;
			line-height: 1rem;
			position: fixed;
			bottom: -0.3rem;
			color: #1B8DFF;
			border-top: 1px solid #D9D9D9;
			background-color: #F3F7FA;
			text-align: center;
		}
		.bottom_div .mid{
		    display: inline-block;
		    height: 100%;
		    width: 32%;
		    color: #808080;
		}
		
		.bottom_div img{
			width: 0.4rem;
			vertical-align: middle;
		}
		.mid p{
			height: 0.6rem;
			line-height: 0.6rem;
			margin-bottom: -0.1rem;
		}
		.searchYx {
			background: #F3F7FA;
			display: inline-block;
			height: 0.8rem;
			width: 90%;
			margin-left: 5%;
			padding-left: 0.2rem;
			border-radius: 5px;
		}
		
		.searchYx input {
			background: #F3F7FA;
			height: 0.8rem;
			color: #0F090B;
		}
		
		.mui-search {
			display: inline-block;
			width: auto !important;
			border: none !important;
			margin: 0 !important;
		}
		
		.asdasd {
			margin-left: 0.6rem;
		}
			label {
			padding: 0 !important;
			line-height: normal !important;
			display: block !important;
		}
		.parent{
			margin: 0 !important;
			padding: 0 !important;
		}
		.mui-table-view-cell{
			padding-bottom: 8px;
		}
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<template>
  <transition name="slide-fade">
  <div class="hello main">
   <header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
				<a class="mui-pull-left mui-action-back" @click="go">取消</a>
				<h1 class="mui-title">选择影像</h1>
				<button class="mui-pull-right" id="choose_btn">全选</button>
				<button class="mui-pull-right" id="quxiao_btn" style="display: none;">取消</button>
			</header>
    <div class="mui-content" style="background: #FFFFFF;">
        <p style="height:1.1rem;padding-top: 0.2rem;margin: 0;background: #FFFFFF;">
					<a href="#" class="searchYx">
						<img src="static/images/search.png" alt="" id="search_btn" />
						<input type="text" class="mui-search" placeholder="请输入患者姓名或者拼音" />
					</a>
				</p>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a href="javascript:;" class="parent">
							<div class="mui-input-row mui-checkbox mui-left">
								<label for="">
								<div class="asdasd">
									<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
									<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
										贾宇翔
										<p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
										<p class='mui-ellipsis'>2017-05-15 李少鹏医生分享</p>
									</div>
								</div>
								<input type="checkbox" class="checkBbox">
								</label>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="javascript:;" class="parent">
							<div class="mui-input-row mui-checkbox mui-left">
								<label for="">
								<div class="asdasd">
									<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
									<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
										高科
										<p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
										<p class='mui-ellipsis'>2017-05-15 李少鹏医生分享</p>
									</div>
								</div>
								<input type="checkbox" class="checkBbox">
								</label>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="javascript:;" class="parent">
							<div class="mui-input-row mui-checkbox mui-left">
								<label for="">
								<div class="asdasd">
									<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
									<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
										和纸居
										<p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
										<p class='mui-ellipsis'>2017-05-15 李少鹏医生分享</p>
									</div>
								</div>
								<input type="checkbox" class="checkBbox">
								</label>
							</div>
						</a>
					</li>
				</ul>
      </div>
      <div class="bottom_div" >
				<div class="mid share">
					<p>
						<img src="static/images/videocloud_share@2x.png" alt="" />
					</p>
					<p>分享</p>
				</div>
				<div class="mid save" @click="gob">
					<p>
						<img src="static/images/videocloud_save@2x.png" alt="" />
					</p>
					<p>存到云盘</p>
				</div>
				<div class="mid del">
					<p>
						<img src="static/images/videocloud_delect@2x.png" alt="" />
					</p>
					<p>删除</p>
				</div>
			</div>
			<div class="share_res" align="center">
			<img src="static/images/erweima_moni.png" alt="" />
			<p>请使用”医联通APP“扫描查看影像</p>
			<div class="share_con">
				<div class="doc_share">
					<img src="static/images/videocloud_share_doctor@2x.png" alt="" />
					<span>医生分享</span>
				</div>
				<div onclick="share_friends()" data-app="weixin" class="nativeShare weixin">
					<img src="static/images/videocloud_share_weixin@2x.png" alt="" />
					<span>微信分享</span>
				</div>
				<div onclick="share_friendsCircle()" data-app="weixinFriend" class="nativeShare weixin_timeline">
					<img src="static/images/videocloud_share_friend@2x.png" alt="" />
					<span>朋友圈分享</span>
				</div>
			</div>
		</div>
  </div>
    </transition>
</template>
<script type="text/javascript">

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'hell world！'
            }
        },
        methods:{
						go:function(){
						 this.$router.push({path:"/fenxiang"})
						},
						gob:function(){
							 this.$router.push({path:"/target_folder_Yx"})
						}
        },
        mounted:function(){
	        	$("#choose_btn").click(function() {
						//				alert("ss")
						$(this).hide();
						$(".checkBbox").attr("checked", "checked");
						$("#quxiao_btn").show()
					})
		
					$("#quxiao_btn").click(function() {
						//				alert("ss")
						$(this).hide();
						$(".checkBbox").removeAttr("checked", "checked");
		//				$("input[type=checkbox]:before").css("color","#000");
						location.reload();
						$("#choose_btn").show()
					});
					
						//删除
						$(".del").click(function(){
							if($(".checkBbox").is(':checked')) {
								mui.confirm('', '删除后文件将不能恢复，确定删除么？', ['取消', '确定删除'], function(e) {
									//alert("sss");
									if(e.index == 1) {
											$(".checkBbox:checked").parents("li").remove();
									} else {
										alert("没删除")
									}
								}, 'div');
							} else {
								mui.toast("请选择影像资料 ！");
							}
						})
						
									//			分享
						$(".share").click(function(){
							if($(".checkBbox").is(':checked')) {
								$(".share_res").show();
							//alert("sss")
			
							//创建遮罩层
							var mask = mui.createMask(function() {
								//alert("dd")
								$(".share_res").hide();
								//mask.close();//关闭遮罩
							}); //callback为用户点击蒙版时自动执行的回调；
							mask.show(); //显示遮罩
							} else {
								mui.toast("请选择影像资料 ！");
							}
							
						});

        }
    }

</script>
