<style scoped>
  html,body{
    background-color: #F5F5F6;
  }
  .mui-content {
    background-color: #F5F5F6;
    padding-top: 44px;
  }

  header a {
    color: #0E85FE !important;
  }

  .navbar-item .back-ico:before,
  .navbar-item .next-ico:before {
    color: #0E85FE;
  }

  ul {
    margin: 0.4rem 0;
    background-color: #FFF;
    padding: 0;
  }

  li {
    list-style-type: none;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #EBEBEB;
    padding-left: 3%;
    font-size: 0.33rem;
    color: #000;
    text-align: left;
  }

  ul li:nth-child(1) {
    border-top: 1px solid #EBEBEB;
  }

  li a {
    color: #000;
    display: block;
    width: 100%;
    height: 100%;
  }

  .mui-content li {
    position: relative;
  }

  .mui-content img {
    width: 0.17rem;
    position: absolute;
    top: 0.3rem;
    right: 0.5rem;
  }
  .mui-bar-nav{
    box-shadow: none;
    border-bottom: 1px solid #DDD;
  }

  .mui-bar-nav~.mui-content {
     padding-top: 0;
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
<div class="hello mui-content">
	<img src="../assets/logo.png" alt="" />
  <header class="mui-bar mui-bar-nav" style="background: #FFF;">
  <a href="../index.html" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
  <h1 class="mui-title">云影像</h1>
  </header>
  <ul>
    <li>
      <router-link  :to="{ name: 'mydisk'}">
        我的云盘
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png" /></span>
      </router-link>
    </li>
  </ul>
  <ul>
    <li>
      <router-link  :to="{ name: 'hospitallist'}">
        医联体影像
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'benyuanYx'}">
        本院影像
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>
    <li>
      <router-link  :to="{ name: 'fenxiang'}">
        他人分享
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>
  </ul>
  <ul>
    <li>
      <router-link :to="{ name: 'jinxiaohu'}">
        影像会诊
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'index'}">
        我的诊断报告
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'index'}">
        医联体报告
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
     </router-link>
    </li>
  </ul>
  <ul>
    <li>
     <router-link :to="{ name: 'rep_statistics'}">
        报告统计
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>

    <li>
     <router-link :to="{ name: 'rep_Autiting'}">
        报告审核
        <span class="mui-icon"><img src="static/images/arrow_right@2x.png"/></span>
      </router-link>
    </li>
  </ul>
  <!--</div>-->
</div>
</transition>
</template>

<script>
//    import index from 'components/index.vue'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'hell world！'
            }
        },
        methods:{
            change: function() {
                alert(333);
            }
        },
        mounted:{
        	
        }
	      

    }

</script>