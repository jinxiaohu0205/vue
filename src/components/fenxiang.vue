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
    border-color: #0F87FE !important;
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
    width: 1.6rem;
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

  .top {
    position: fixed;
    top: 44px;
    z-index: 9999;
    padding-top: 0 !important;
    padding-bottom: 0.2rem;
    display: none;
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

  .mui-table-view-cell:after {
    height: 0;
  }

  .border1 {
    background: #FFFFFF;
    border-bottom: 1px solid #DDD;
  }

  .caozuo_show {
    width: 110%;
    margin-left: -5%;
    padding-top: 0.15rem;
    border-bottom: 1px solid #DDD;
  }
  .asdasd{
    text-align: left;
  }
  p{
    color: #8f8f94;
  }
</style>
<template>
<div class="hello">
  <header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
    <router-link class="mui-icon mui-icon-left-nav mui-pull-left":to="{ name: 'hospitallist'}"></router-link>
    <h1 class="mui-title">他人分享</h1>
    <button class="mui-pull-right" id="shaixuan">筛选</button>
    <button class="mui-pull-right" id="shaixuann" @click="go">选择</button>
    <button class="mui-pull-right" id="shouqi" style="display: none;">收起</button>
  </header>
  <div class="mui-content top" style="opacity: 0.9;">
    <div class="chos_time">
      <p class="time">诊断时间</p>
      <p style="margin-top: 0.1rem;">
        <button onclick="buxianT(this)" id="time_buxian" class="bianse">不限</button>
        <input type="datetime-local" class="time_btn" id="inpstart"  placeholder="开始时间" value="" /> 至
        <input type="datetime-local" class="time_btn" id="inpend" onclick="xuanzhong1(this)" placeholder="结束时间" />
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
  </div>
  <ul class="mui-table-view" style="overflow-x: hidden;border: 1px solid #DDD;">
    <li class="mui-table-view-cell wenjianjia border1">
      <a href="#" class="parent">
        <div class="mui-input-row mui-checkbox mui-left">
          <div class="asdasd">
            <div class="mui-media-object mui-pull-left yingX_img" style="">CT</div>
            <div class="mui-media-body" style="padding-top: 0.05rem;display: inline-block;">
              贾宇翔
              <p class='mui-ellipsis'>左云县人民医院 2017-01-01 15:20</p>
            </div>
          </div>
          <input name="checkbox1" value="Item 1" type="checkbox" class="checkBbox" style="display: none;">
        </div>
      </a>
      <div  class="caozuos">
        <img src="static/images/arrow_bottom@2x.png" class="caozuos_img" />
      </div>
      <div  class="caozuox">
        <img src="static/images/arrow_top@2x.png" class="caozuox_img" />
      </div>
    </li>
    <div class="caozuo_show" style="display: none;background-color: #F3F7FA;">
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
          <div class="mui-media-body">诊断报告</div>
        </a>
      </div>
      <div class="share_div1" onclick="save(this)">
        <a href="target_folder_Yx.html">
          <img src="static/images/videocloud_save@2x.png" />
          <div class="mui-media-body">存到云盘</div>
        </a>
      </div>
    </div>
  </ul>
  <div class="share_res" align="center">
    <img src="static/images/erweima_moni.png" alt="" />
    <p>请使用”医联通APP“扫描查看影像</p>
    <div class="share_con">
      <div class="doc_share">
        <img src="static/images/videocloud_share_doctor@2x.png" alt="" />
        <span>医生分享</span>
      </div>
      <div>
        <img src="static/images/videocloud_share_weixin@2x.png" alt="" />
        <span>微信分享</span>
      </div>
      <div>
        <img src="static/images/videocloud_share_friend@2x.png" alt="" />
        <span>朋友圈分享</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msgg: []
            }
        },
        methods:{
        	go:function(){
//      		alert(1);
        		this.$router.push({path:"/yingX_chos1"})
        	}
        },
        mounted:function(){
        	mui.init();
//          var start = {
//          format: 'YYYY-MM-DD',
//          minDate: '1970-01-01', //设定最小日期为当前日期
//          isinitVal: false,
//          festival: false,
//          ishmsVal: false,
//          maxDate: $.nowDate({
//              DD: 0
//          }), //最大日期
//          choosefun: function(elem, val, date) {
//              end.minDate = date; //开始日选好后，重置结束日的最小日期
//              endDates();
//          }
//      };
//      var end = {
//          format: 'YYYY-MM-DD',
//          minDate: $.nowDate({
//              DD: 0
//          }), //设定最小日期为当前日期
//          festival: false,
//          maxDate: '2099-06-16', //最大日期
//          choosefun: function(elem, val, date) {
//              start.maxDate = date; //将结束日的初始值设定为开始日的最大日期
//          }
//      };
//      //这里是日期联动的关键
//      function endDates() {
//          //将结束日期的事件改成 false 即可
//          end.trigger = false;
//          $("#inpend").jeDate(end);
//      }
//      $('#inpstart').jeDate(start);
//      $('#inpend').jeDate(end);
            
            $(".caozuos").click(function(){
//          	alert(1);
                event.stopPropagation();

                //			alert("ss")
                $(this).hide();
                $(this).next().show();
                $(this).parents(".wenjianjia").next().show();
                $(".wenjianjia").removeClass("border1");
            })


//          function shouqi(this1) {
            	$(".caozuox").click(function(){
            		 //			alert("ss")
                $(this).hide();
                $(this).prev().show();
                $(this).parents(".wenjianjia").next().hide();
                $(".wenjianjia").addClass("border1");
            	})
               
//          }

            //选择按钮
            $("#choose_btn").click(function() {
                alert(1);
                $(this).hide();
                $(".checkBbox").show();
                $("#quxiao_btn").show();
                $(".caozuos").hide();
                $(".caozuox").hide();
                $(".caozuo_show").hide();
                $(".asdasd").css("margin-left", "0.6rem");
                $(".bottom_div").slideToggle();
            })

            //分享
            function share(this1) {
                $(".share_res").show();
                //alert("sss")

                //创建遮罩层
//              var mask = mui.createMask(function() {
//                  //alert("dd")
//                  $(".share_res").hide();
//                  //mask.close();//关闭遮罩
//              }); //callback为用户点击蒙版时自动执行的回调；
//              mask.show(); //显示遮罩
            }
            $(".doc_share").click(function(){
                location.href = "docChoose.html";
            })
            //筛选
            $("#shaixuan").click(function() {
                $(".top").show();
                $(this).hide();
                $("#shouqi").show();
                $("#choose_btn").hide();
                $("header").css("z-index", "2098")
                //创建遮罩层
//              mask = mui.createMask(function() {
//                  //alert("dd")
//                  $(".top").hide();
//                  $("#choose_btn").show();
//                  $("#shaixuan").show();
//                  $("#shouqi").hide();
//                  //mask.close();//关闭遮罩
//              }); //callback为用户点击蒙版时自动执行的回调；
//              mask.show(); //显示遮罩
            })

            //收起
            $("#shouqi").click(function() {
//              mask.close();
                $(this).hide();
                $("#choose_btn").show();
                $("#shaixuan").show();
                $(".top").hide();
            })

            //选中
            function xuanzhong(this1) {
                if($(this1).hasClass("bianse")) {
                    $(this1).removeClass("bianse")
                } else {
                    $(this1).addClass("bianse");
                }
                $("#leixing_buxian").removeClass("bianse")
            }
            //不限
            function buxian(this1) {
                //				alert(":")

                $(".type_btn button").removeClass("bianse");
                $(this1).addClass("bianse");
            }

            //时间不限
            $("#time_buxian").click(function() {
                //				alert("sss")
                $(".type_btn button").removeClass("bianse");
                $(this).addClass("bianse");
                $(".time_btn").val('');
            })

            function buxianT(this1) {

                $(this1).addClass("bianse")
                $("#inpstart").removeClass("bianse");
                $("#inpend").removeClass("bianse");
            }

            //开始日期
//          function xuanzhong1(this1) {
								$('#inpstart').click(function(){
//									alert(1);
									 $(this).addClass("bianse");

               	 $("#time_buxian").removeClass("bianse");
								})
               
//          }

        }
    }


</script>