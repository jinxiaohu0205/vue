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

  .share_div {
    display: inline-block;
    width: 32%;
    text-align: center;
    /*color: #000;*/
  }

  .share_div1 {
    display: inline-block;
    width: 1.6rem;
    text-align: center;
    /*color: #000;*/
       float: left;
  }

  .share_div a,
  .share_div1 a {
    color: #7F7F7F;
  }

  .share_div .mui-navigate-right:after {
    display: none !important;
  }

  .mui-table-view-cell {
    position: relative;
  }

  #add_folders {
    position: absolute;
    top: 0.32rem;
    left: 0.5rem;
  }

  #search_btn {
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
  }

  .share_div .mui-media-body {
    font-size: 0.28rem;
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
    padding-top: 0.12rem;
    position: fixed;
    bottom: -0.3rem;
    color: #808080;
    border-top: 1px solid #D9D9D9;
    background-color: #F3F7FA;
  }

  .bottom_div div {
    width: 32%;
    text-align: center;
    display: inline-block;
  }

  .bottom_div ul {
    margin: 0;
    padding: 0;
  }

  .bottom_div li {
    list-style-type: none;
    text-align: center;
    font-size: 0.3rem;
  }

  .caozuo_show {
    width: 110%;
    margin-left: -5%;
    padding-top: 0.15rem;
    border-bottom: 1px solid #DDD;
    overflow: hidden;
  }

  .search_a {
    display: inline-block;
    height: 0.7rem;
    background: #F3F7FA;
    margin-left: 1.2rem;
    width: 80%;
    border-radius: 2%;
    position: relative;
  }

  .search_a input {
    border: none;
    width: 95%;
    margin: 0;
    padding: 0;
    padding-left: 0.7rem;
    margin-bottom: 0.1rem;
    background: #F3F7FA;
    height: 0.6rem;
  }

  label {
    padding: 0 !important;
    line-height: normal !important;
    display: block !important;
  }

  .parent,.parent1 {
    margin: 0 !important;
    padding: 0 !important;
  }

  .mui-table-view-cell:after {
    height: 0;
  }

  .border1 {
    background: #FFFFFF;
    border-bottom: 1px solid #DDD;
  }
  /*.mui-bar-nav~.mui-content {
    padding-top: 0;
  }*/
   .asdasd{
    text-align: left;
    color: #000;
  }
  p{
    color: #8f8f94;
  }
  .mui-table-view{
  	text-align: left;
  }
  .checkBbox {
    left:22px !important;
}
  .fade-enter-active, .fade-leave-active {
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
      <router-link class="mui-icon mui-icon-left-nav mui-pull-left" :to="{ name: 'HelloWorld'}"></router-link>
      <h1 class="mui-title">我的云盘</h1>
      <button class="mui-pull-right" id="choose_btn">选择</button>
      <button class="mui-pull-right" id="quxiao_btn" style="display: none;">取消</button>
    </header>
    <div class="mui-content" style="background: #FFFFFF;">
        <p style="padding: 0.2rem;margin: 0;position: relative;">
          <img src="static/images/videocloud_addfolder.png" alt="" id="add_folders" />
          <a  class="search_a">
            <img src="static/images/search.png" alt="" id="search_btn" />
            <input type="text" placeholder="请输入患者姓名或者拼音" style="padding-top: 0.15rem;color: #000;"/>
          </a>
        </p>


        <ul class="mui-table-view" style="overflow-x: hidden;border-top: 1px solid #DDD;" v-for="item in msgg" v-show="item.id==1||item.id==2">
        <router-link class="mui-table-view-cell wenjianjia border1" :to="'/jinxiaohu'" tag="li">
            <div class="mui-input-row mui-checkbox mui-left">
              <img class="mui-media-object mui-pull-left" src="static/images/videocloud_folder.png">
              <div class="mui-media-body" id="name" style="padding-top: 0.3rem;display: inline-block;">
                核磁科室分享
              </div>
            </div>
          <div  class="caozuos">
            <img src="static/images/arrow_bottom@2x.png" class="caozuos_img" />
          </div>
          <div  class="caozuox">
            <img src="static/images/arrow_top@2x.png" class="caozuox_img" />
          </div>
        </router-link>
          <div class="caozuo_show" style="display:none;background-color: #F3F7FA;">
            <div class="share_div" >
              <router-link :to="{ name: 'target_folder_Yx'}">
                <img src="static/images/videocloud_move@2x.png" alt="" style="width: 0.4rem;" />
                <div class="mui-media-body">移动</div>
              </router-link>
            </div>
            <div class="share_div" @click="reName($event)">
              <a href="#">
                <img src="static/images/videocloud_rename@2x.png" alt="" style="width: 0.4rem;" />
                <div class="mui-media-body">重命名</div>
              </a>
            </div>
            <div class="share_div" @click="deleteThis($event)">
              <a href="#">
                <img src="static/images/videocloud_delect@2x.png" alt="" style="width: 0.4rem;" />
                <div class="mui-media-body">删除</div>
              </a>
            </div>
          </div>
        </ul>
        <ul class="mui-table-view" style="overflow-x: hidden;" v-for="item in msgg" >
					<li class="mui-table-view-cell wenjianjia border1 wenjian">	
						
							<div class="mui-input-row mui-checkbox mui-left appendC">
							<router-link :to="{ name: 'hu'}" class="parent">	
								<div class="asdasd">
									<div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
									<div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
										高科
										<p class='mui-ellipsis'>
											<span>左云县人民医院{{item.id}} </span>
											<span style="width:auto;margin-left: 0.1rem;">2017-01-01 15:20</span>
										</p>
									</div>
								</div>
							</router-link>	
								<input type="checkbox"  value="22" class="checkBbox" name="name" style="display: none;">
							</div>
						
						<div  class="caozuos">
							<img src="static/images/arrow_bottom@2x.png" class="caozuos_img" />
						</div>
						<div  class="caozuox">
							<img src="static/images/arrow_top@2x.png" class="caozuox_img" />
						</div>
					</li>
					<div class="caozuo_show" style="display: none;background-color: #F3F7FA;">
						<div class="share_div1">
							<a href="ill_his.html">
								<img src="static/images/videocloud_illhistory@2x.png" />
								<div class="mui-media-body">病历</div>
							</a>
						</div>
						<div class="share_div1">
							<router-link :to="{ name: 'baogaolist'}">
								<img src="static/images/videocloud_report@2x.png" />
								<div class="mui-media-body">报告</div>
							</router-link>
						</div>
						<div class="share_div1">
							<a href="#">
								<img src="static/images/videocloud_share@2x.png" />
								<div class="mui-media-body" onclick="share(this)">分享</div>
							</a>
						</div>
						<div class="share_div1" onclick="move_folder(this)">
						  <router-link :to="{ name: 'target_folder_Yx'}">
								<img src="static/images/videocloud_move@2x.png" />
								<div class="mui-media-body">移动</div>
							</router-link>
						</div>
						<div class="share_div1" @click="deleteThis($event,item)">
							<a href="#">
								<img src="static/images/videocloud_delect@2x.png" />
								<div class="mui-media-body">删除</div>
							</a>
						</div>
					</div>
				</ul>
				
      </div>
      <div class="bottom_div" style="display: none;">
				<div style="color: #808080;" onclick="share1()">
					<ul>
						<li><img src="static/images/videocloud_share@2x.png" alt="" style="width: 0.4rem;" /></li>
						<li>分享</li>
					</ul>
				</div>
				<div style="color: #808080;" onclick="yidong()">
					<ul>
						<li><img src="static/images/videocloud_move@2x.png" alt="" style="width: 0.4rem;" /></li>
						<li>移动</li>
					</ul>
				</div>
				<div style="color: #808080;" @click="deleteThis1()">
					<ul>
						<li><img src="static/images/videocloud_delect@2x.png" alt="" style="width: 0.4rem;" /></li>
						<li>删除</li>
					</ul>
				</div>
			</div>
  </div>
    </transition>
</template>
<script type="text/javascript">
//import $ from 'jquery'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'hell world！',
                msgg:[
			            {id:1,prices:100,nums:1,name:"电脑"},
			            {id:2,prices:200,nums:2,name:"电视"},
			            {id:3,prices:300,nums:3,name:"冰箱"},
			            {id:4,prices:400,nums:1,name:"彩电"},
			            {id:5,prices:500,nums:2,name:"洗衣机"},
			            {id:6,prices:100,nums:3,name:"手机"}
			        	]
            }
        },
        methods:{
        	//删除文件或者文件夹
					 deleteThis:function(this1,item) {
					 	console.log(item.id);
					 	var this1=$(this1.currentTarget);
						mui.confirm('', '删除后文件将不能恢复111，确定删除么？', ['取消', '确定删除'], function(e) {
							console.log(e);
							if(e.index == 1) {
								$(this1).parents(".caozuo_show").prev().remove();
								$(this1).parents(".caozuo_show").remove();
								mui.toast("删除成功");
							} else {
		
							}
						}, 'div')
					},
					//多项选择的时候
	        deleteThis1: function(item) {
	        	console.log(item)
            if($(".checkBbox").is(':checked')) {
							mui.confirm('', '删除后文件将不能恢复，确定删除么？', ['取消', '确定删除'], function(e) {
								if(e.index == 1) {
									console.log(1);
					         	 $("input[name='name']:checked").parents(".wenjian").remove();
					         	 mui.toast("删除成功");
								} else {
									mui.toast("删除失败 ");
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
                $(this).parents(".wenjianjia").next().slideToggle();
                $(this).parents(".wenjianjia").removeClass("border1");
            })

            $(".caozuox").click(function () {
            	  event.stopPropagation();
                $(this).hide();
                $(this).prev().show();
                $(this).parents(".wenjianjia").next().slideToggle();
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
                $(".bottom_div").slideToggle();
                $(".asdasd").css("margin-left","43px");
                $(".asdasd").css("transition","0.5s");
            })
            
		            //取消按钮
						$("#quxiao_btn").click(function() {
							$(this).hide();
							$(".checkBbox").hide();
							$("#choose_btn").show();
							$(".caozuos").show();
							$(".caozuox").hide();
							$(".bottom_div").slideToggle();
							$(".asdasd").css("margin-left",0);
					});
					
					
        }
    }

</script>
