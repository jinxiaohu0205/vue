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

  .bianse {
    border-color: #0F87FE !important ;
    color: #0F87FE !important;
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
    width: 18%;
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

  .mui-table-view-cell {
    position: relative;
  }

  #add_folders {
    margin-top: 0.2rem;
    margin-left: 0.3rem;
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

  .mui-checkbox.mui-left label,
  .mui-radio.mui-left label {
    padding-right: 0;
    padding-left: 0.6rem;
  }

  .bottom_div {
    width: 100%;
    height: 1.5rem;
    padding-top: 0.12rem;
    position: fixed;
    bottom: -0.3rem;
    color: #808080;
    border-top: 1px solid #D9D9D9;
    background-color: #FFF;
  }

  .bottom_div div {
    width: 23%;
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

  .searchYx {
    width: 90%;
    background: #F3F7FA;
    display: inline-block;
    height: 0.8rem;
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

  .top {
    position: fixed;
    top: 44px;
    z-index: 9999;
    padding-top: 0 !important;
    padding-bottom: 0.2rem;
    display: none;
  }

  .top p {
    margin: 0;
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

  .chos_type {
    padding: 0.2rem;
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

  .caozuo_show {
    width: 110%;
    margin-left: -5%;
    padding-top: 0.15rem;
    border-bottom: 1px solid #DDD;
  }

  /*.mui-table-view-cell:after {
      height: 0;
  }*/

  label {
    padding: 0 !important;
    line-height: normal !important;
    display: block !important;
  }
  /*.border1 {
      background: #FFFFFF;
      border-bottom: 1px solid #DDD;
  }*/
  #quxiao_btn{
    display: none;
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
  .asdasd{
    text-align: left;
  }
  p{
    color: #8f8f94;
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
      <h1 class="mui-title">本院影像</h1>
      <button class="mui-pull-right" id="shaixuan">筛选</button>
      <button class="mui-pull-right" id="choose_btn">选择</button>
      <button class="mui-pull-right" id="allcheck" style="display: none;">全选</button>
      <button class="mui-pull-right" id="allcheckquxiao" style="display: none;">取消全选</button>
      <button class="mui-pull-right" id="quxiao_btn">取消</button>
      <button class="mui-pull-right" id="shouqi" style="display: none;">收起</button>
    </header>
    <div class="mui-content top">
      <div class="chos_time">
        <p class="time">诊断时间</p>
        <p style="margin-top: 0.1rem;">
          <button id="time_buxian" class="bianse">不限</button>
          <input type="text" class="time_btn" id="inpstart" onclick="xuanzhong1(this)" placeholder="开始时间" value="" /> 至
          <input type="text" class="time_btn" id="inpend" onclick="xuanzhong1(this)" placeholder="结束时间" />
        </p>
      </div>
      <div class="chos_type">
        <p style="padding-left:0.1rem;">影像类型</p>
        <p class="type_btn">
          <button onclick="buxian(this)" id="leixing_buxian" class="bianse">不限</button>
          <button onclick="xuanzhong(this)">CT</button>
          <button onclick="xuanzhong(this)">DX</button>
          <button onclick="xuanzhong(this)">US</button>
          <button onclick="xuanzhong(this)">MR</button>
          <button onclick="xuanzhong(this)">RF</button>
          <button onclick="xuanzhong(this)">CR</button>
          <button onclick="xuanzhong(this)">NM</button>
        </p>
      </div>
      <button class="finish_btn">完成</button>
    </div>
    <div class="mui-content">
      <p style="height:1.1rem;padding-top: 0.2rem;margin: 0;background: #FFFFFF;">
        <a href="#" class="searchYx">
          <img src="static/images/search.png" alt="" id="search_btn" />
          <input type="text" class="mui-search" placeholder="请输入患者姓名或者拼音" />
        </a>
      </p>
      <ul class="mui-table-view" style="overflow-x: hidden;">
        <li class="mui-table-view-cell wenjianjia border1">
          <a href="#" class="parent YXyuepian">
            <div class="mui-input-row mui-checkbox mui-left">
              <label for="">
                <div class="asdasd">
                  <div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
                  <div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
                    贾宇翔
                    <p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
                  </div>
                </div>
                <input type="checkbox" class="checkBbox" style="display: none;">
              </label>
            </div>
          </a>
          <div  class="caozuos">
            <img src="static/images/arrow_bottom@2x.png" class="caozuos_img" />
          </div>
          <div  class="caozuox">
            <img src="static/images/arrow_top@2x.png" class="caozuox_img" />
          </div>
        </li>
        <div class="caozuo_show" style="display: none;background-color: #F3F7FA;padding-left: 5%;">
          <div class="share_div1 huizhen1">
            <a href="#">
              <img src="static/images/videocloud_meeting@2x.png" />
              <div class="mui-media-body">影像会诊</div>
            </a>
          </div>
          <div class="share_div1">
            <a href="#">
              <img src="static/images/videocloud_share@2x.png" />
              <div class="mui-media-body" onclick="share(this)">分享</div>
            </a>
          </div>

          <div class="share_div1">
            <a href="ill_his.html">
              <img src="static/images/videocloud_report@2x.png" />
              <div class="mui-media-body">病历</div>
            </a>
          </div>
          <div class="share_div1">
            <a href="diagnosis_rep.html">
              <img src="static/images/videocloud_illhistory@2x.png" />
              <div class="mui-media-body">报告</div>
            </a>
          </div>
          <div class="share_div1" onclick="save(this)">
            <a href="#">
              <img src="static/images/videocloud_save@2x.png" />
              <div class="mui-media-body">存到云盘</div>
            </a>
          </div>
        </div>
      </ul>
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
            change: function() {
                alert(222);
            }
        },
        mounted:function(){
           //展开
            $(".caozuos").click(function(){
                //阻止事件冒泡
                event.stopPropagation();

                //			alert("ss")
                $(this).hide();
                $(this).next().show();
                $(this).parents(".wenjianjia").next().show();
                $(this).parents(".wenjianjia").removeClass("border1");

            })
            //收起
            $(".caozuox").click(function(){
                //			alert("ss")
                $(this).hide();
                $(this).prev().show();
                $(this).parents(".wenjianjia").next().hide();
                $(this).parents(".wenjianjia").addClass("border1");
            })
            //筛选
            $("#shaixuan").click(function() {
                $(".top").show();
                $(this).hide();
                $("#shouqi").show();
                $("#choose_btn").hide();
                $("header").css("z-index", "2098")
                //创建遮罩层
                mask = mui.createMask(function() {
                    //alert("dd")
                    $(".top").hide();
                    $("#choose_btn").show();
                    $("#shaixuan").show();
                    $("#shouqi").hide();
                    //mask.close();//关闭遮罩
                }); //callback为用户点击蒙版时自动执行的回调；
                mask.show(); //显示遮罩
            })
	
            //收起
            $("#shouqi").click(function() {
//              mask.close();
                $(this).hide();
                $("#choose_btn").show();
                $("#shaixuan").show();
                $(".top").hide();
            })
            
			            //选择
						$("#choose_btn").click(function(){
							$(".asdasd").css("margin-left","0.6rem");
							$(this).hide();
							$("#quxiao_btn").show();
							$(".checkBbox").show();
							$(".caozuos").hide();
							$(".caozuox").hide();
							$(".caozuo_show").hide()
			//				if($("caozuo_show").css("display") == "none"){
			//					alert("ss")
			//				}
							//$(".mui-table-view-cell:after").css("height","1px");
							$("#allcheck").show();
							$("#shaixuan").hide();
							$(".bottom_div").show();
						})
						
									//取消
						$("#quxiao_btn").click(function(){
							$(".asdasd").css("margin-left","0");
							$(this).hide();
							$("#choose_btn").show();
							$(".checkBbox").hide();
							$(".caozuos").show();
							$("#allcheck").hide();
							$("#shaixuan").show();
							$(".bottom_div").hide();
						})

        }
//
    }

</script>
