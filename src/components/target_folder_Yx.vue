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
		
		.mui-content>.mui-table-view:first-child {
			margin-top: 0;
		}
		
		.mui-popup-button.mui-popup-button-bold {
			font-weight: normal;
		}
		
		.share_div {
			display: inline-block;
			width: 32%;
			text-align: center;
			/*color: #000;*/
		}
		
		.share_div1 {
			display: inline-block;
			width: 22%;
			text-align: center;
			/*color: #000;*/
		}
		
		.share_div a,
		.share_div1 a {
			color: #7F7F7F;
		}
		
		.share_div .mui-navigate-right:after {
			display: none !important;
		}
		
		.share_div .mui-media-body {
			font-size: 0.28rem;
		}
		
		.share_div1 .mui-media-body {
			font-size: 0.28rem;
		}
		
		.bottom_fuc {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			margin-bottom: 0;
			border-top: 1px solid #DFE1E3;
			background-color: #F3F7FA;
		}
		
		.bottom_fuc span {
			display: inline-block;
			width: 49%;
			text-align: center;
			color: #2290FF;
			font-size: 0.32rem;
		}
   .asdasd{
    text-align: left;
  }
  p{
    color: #8f8f94;
  }
  .mui-table-view{
  	text-align: left;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<template>
   <transition name="fade">
  <div class="hello main">
    <header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
      <span class="mui-icon mui-icon-left-nav mui-pull-left" @click="goback" style="color:#0E85FE ;"></span>
      <h1 class="mui-title">选择目标文件夹</h1>
    </header>
    
    <div class="mui-content" style="background: #FFFFFF;">
       <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="javascript:;" class="parent">
						<img class="mui-media-object mui-pull-left" src="static/images/videocloud_folder.png">
						<div class="mui-media-body" style="padding-top: 0.3rem;display: inline-block;">
							核磁科室分享
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="javascript:;" class="parent">
						<img class="mui-media-object mui-pull-left" src="static/images/videocloud_folder.png">
						<div class="mui-media-body" style="padding-top: 0.3rem;display: inline-block;">
							骨科分享
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="javascript:;" class="parent">
						<img class="mui-media-object mui-pull-left" src="static/images/videocloud_folder.png">
						<div class="mui-media-body" style="padding-top: 0.3rem;display: inline-block;">
							脑科分享
						</div>
					</a>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell ">
					<a href="javascript:;" class="parent">
						<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
						<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
							顾海
							<p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
						</div>
					</a>
				</li>

				<li class="mui-table-view-cell ">
					<a href="javascript:;" class="parent">
						<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
						<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
							贾宇翔
							<p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell ">
					<a href="javascript:;" class="parent">
						<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
						<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
							高科
							<p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
						</div>
					</a>
				</li>
			</ul>

			<p class="bottom_fuc">
				<span id="add_folders">新建文件夹</span>
				<span style="border-left: 1px solid #DFE1E3;">移入</span>
			</p>
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
        	goback:function(){
        		this.$router.go(-1);
//location.reload()
        	},
        	//删除文件
					 deleteThis:function(this1) {
					 	var this1=$(this1.currentTarget);
						mui.confirm('', '删除后文件将不能恢复111，确定删除么？', ['取消', '确定删除'], function(e) {
							console.log(e);
							if(e.index == 1) {
								$(this1).parents(".caozuo_show").prev().remove();
								$(this1).parents(".caozuo_show").remove();
							} else {
		
							}
						}, 'div')
					},
	        deleteThis1: function() {
		            if($(".checkBbox").is(':checked')) {
						mui.confirm('', '删除后文件将不能恢复，确定删除么？', ['取消', '确定删除'], function(e) {
	//						alert("sss");
							if(e.index == 1) {
								console.log(1);
				         	 $("input[name='name']:checked").parents(".wenjian").remove();
							} else {
								alert("否否")
							}
						}, 'div');
					} else {
						mui.toast("请选择影像资料 ！");
					}
        },
	        //重命名文件夹
				reName: function(this1) {
						var this1=$(this1.currentTarget);
					mui.prompt('', '脑科分享', '重命名该文件夹', ['取消', '确定'], function(e) {
						var data=$(".mui-popup-input input").val();
						$("#name").html(data);
					}, 'div')
				}
        },
        mounted:function(){
            $(".caozuos").click(function () {
                //阻止事件冒泡
                event.stopPropagation();
                $(this).hide();
                $(this).next().show();
                $(this).parents(".wenjianjia").next().show();
                $(this).parents(".wenjianjia").removeClass("border1");
            })

            $(".caozuox").click(function () {
                //			alert("ss")
                $(this).hide();
                $(this).prev().show();
                $(this).parents(".wenjianjia").next().hide();
                $(this).parents(".wenjianjia").addClass("border1");
            })

            //选择按钮
            $("#choose_btn").click(function() {
                $(this).hide();
                $(".checkBbox").show();
                $("#quxiao_btn").show();
                $(".caozuos").hide();
                $(".caozuox").hide();
                $(".caozuo_show").hide();
                //				$(".asdasd").css("margin-left", "0.6rem");
                $(".bottom_div").slideToggle();
                var label_add = $('<label style="padding-left="0"><div class="mui-input-row mui-checkbox mui-left appendC"><div class="asdasd" style="margin-left: 0.6rem;"><div class="mui-media-object mui-pull-left yingX_img" style="">CT</div><div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">高科<p class="mui-ellipsis">左云县人民医院 2017-01-01 15:20</p></div></div><input type="checkbox" class="checkBbox"  name="name" style="left:-2px"></div></label>');
                $(".appendC").html(label_add);
                //				$(".appendC").append('</label>');

            })
            
		            //取消按钮
						$("#quxiao_btn").click(function() {
							$(this).hide();
							$(".checkBbox").hide();
							$("#choose_btn").show();
							$(".caozuos").show();
							$(".caozuox").hide();
							//$(".asdasd").css("margin-left", "0")
							$(".bottom_div").slideToggle();
							$(".appendC").html('<div class="mui-input-row mui-checkbox mui-left appendC"><div class="asdasd"><div class="mui-media-object mui-pull-left yingX_img" style="">CT</div><div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">高科<p class="mui-ellipsis">左云县人民医院 2017-01-01 15:20</p></div></div><input type="checkbox" class="checkBbox" style="display:none;"></div>');
					});
					
					
        }
    }

</script>
