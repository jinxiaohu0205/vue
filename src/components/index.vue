<style scoped>
  html,
  body {
    background: #FFFFFF;
  }

  li {
    list-style-type: none;
  }

  .main {
    padding-bottom: 1.2rem;
  }

  .main_dis div {
    display: inline-block;
  }
  .main_imgRight_top {
    color: #000;
    font-size: 0.36rem;
    text-align: left;
  }

  ul {
    padding: 0;
  }

  ul li {
    line-height: 0.6rem;
  }

  .main_imgRight_bottom {
    color: #787878;
    font-size: 0.3rem;
  }

  .bottom_fix {
    height: 0.5rem;
  }

  .slider_img {
    min-height: 4rem;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    padding: 11px 11px !important;
    border-right: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
  }

  .mui-slider-indicator .mui-active.mui-indicator {
    background: #0C86FE;
  }

  .mui-slider-indicator .mui-indicator {
    background-color: #FFF;
  }
  .mui-slider-indicator{
    bottom: 10px;
  }
  .mui-slider-indicator .mui-indicator{
    border: 1px solid #DDD;
    box-shadow:none;
    width: 8px;
    height: 8px;
    margin: 1px 4px;
  }
</style>
<template>
<div class="hello main">
  <div class="main">
    <header class="mui-bar mui-bar-nav">
					<span class="mui-icon">
					<img src="static/images/index_qrcod@2x.png" style="width: 0.4rem;"/>
				</span>
      <h1 class="mui-title">医联通</h1>
      <span class="mui-icon mui-pull-right">
					<img src="static/images/index_message@2x.png" style="width: 0.4rem;"/>
				</span>
    </header>
    <div class="mui-content">
      <div class="wrapper">


        <!-- 轮播图开始 -->

        <div class="aui-banner-content " data-aui-slider>
          <div class="aui-banner-wrapper">
            <div class="aui-banner-wrapper-item">
              <a href="#">
                <img src="static/images/banner.png">
              </a>
            </div>
            <div class="aui-banner-wrapper-item">
              <a href="#">
                <img src="static/images/banner.png">
              </a>
            </div>
            <div class="aui-banner-wrapper-item">
              <a href="#">
                <img src="static/images/banner.png">
              </a>
            </div>
            <div class="aui-banner-wrapper-item">
              <a href="#">
                <img src="static/images/banner.png">
              </a>
            </div>
          </div>
          <div class="aui-banner-pagination"></div>
        </div>


        <!-- 轮播图结束 -->



      </div>

      <ul class="mui-table-view mui-grid-view mui-grid-9" style="background: #FFFFFF;">
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="view/yunyingxiang.html" class="main_dis">
            <div>
              <img src="images/index_cloud.png" class="main_img">
            </div>
            <div>
              <ul>
                <li class="main_imgRight_top">云影像</li>
                <li class="main_imgRight_bottom">影像资料查看</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#" class="main_dis">
            <div>
              <img src="images/index_meeting.png" class="main_img">
            </div>
            <div>
              <ul>
                <li class="main_imgRight_top">会诊中心</li>
                <li class="main_imgRight_bottom">远程视频会诊</li>
              </ul>
            </div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#" class="main_dis">
            <div>
              <img src="images/index_transfer.png" class="main_img">
            </div>
            <div>
              <ul>
                <li class="main_imgRight_top">双向转诊</li>
                <li class="main_imgRight_bottom">转院申请平台</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#" class="main_dis">
            <div>
              <img src="images/index_exchange.png" class="main_img">
            </div>
            <div>
              <ul>
                <li class="main_imgRight_top">科室互通</li>
                <li class="main_imgRight_bottom">医生交流学习</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#" class="main_dis">
            <div>
              <img src="images/index_sugar.png" class="main_img">
            </div>
            <div>
              <ul>
                <li class="main_imgRight_top">血糖记录</li>
                <li class="main_imgRight_bottom">实时监测血糖</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#" class="main_dis">
            <div>
              <img src="images/index_heart.png" class="main_img">
            </div>
            <div>
              <ul>
                <li class="main_imgRight_top">心电监护</li>
                <li class="main_imgRight_bottom">实时心电监护</li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <nav class="mui-bar mui-bar-tab bottom_fix" style="background: #FFFFFF;">
      <a class="mui-tab-item mui-active" href="index.html">
        <span class="mui-icon"><img src="images/bottombtn_home_blue@2x.png" style="width: 0.4rem;"/></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="zixun.html">
        <span class="mui-icon"><img src="images/bottombtn_talk_gary@2x.png" style="width: 0.4rem;"/></span>
        <span class="mui-tab-label">咨询</span>
      </a>
      <a class="mui-tab-item" href="zhibo_Yx.html">
        <span class="mui-icon"><img src="images/bottombtn_online@2x.png" style="width: 0.4rem;"/></span>
        <span class="mui-tab-label">直播</span>
      </a>
      <a class="mui-tab-item" href="my.html">
        <span class="mui-icon"><img src="images/bottombtn_me_gary@2x.png" style="width: 0.4rem;"/></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
  <div id="demo1" class="mui-progressbar">
    <span></span>
  </div>
</div>
</template>

<script type="text/javascript" charset="utf-8">
import "@/assets/js/jquery.min.js"
import "@/assets/js/lunbo.js"
    export default {
    		created:function(){
    			
    		},
        mounted:function(){
            this.$nextTick(function(){
                mui.init({
                    swipeBack: true //启用右滑关闭功能
                });
                mui("#demo1").progressbar().setProgress(90);

                mui('body').on('tap', 'a', function() {
                    document.location.href = this.href;
                });
                mui('body').on('click', 'a', function() {
                    document.location.href = this.href;
                });

                var slider = mui("#slider");
                slider.slider({ // 这里可以设置定时器，控制轮播图滚动速度
                    interval: 1000
                });
                mui.plusReady(function() {
                    swiperTest = document.getElementById('swiperTest');
                    getaData();
                });
            })

        }
    }

</script>