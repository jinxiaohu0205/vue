<style scoped>
  header .mui-pull-right {
    font-size: 0.3rem !important;
    border: none;
    margin-top: 0.1rem;
    color: #0D85FD;
  }
  .mui-table-view-cell{
    height: 1.2rem;
    line-height: 0.8rem;
  }
  .mui-navigate-right{
    text-align: left;
  }
</style>
<template>
<div class="hello">
  <header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
    <router-link class="mui-icon mui-icon-left-nav mui-pull-left" :to="{ name: 'HelloWorld'}"></router-link>
    <h1 class="mui-title">选择医院</h1>
  </header>
  <div class="mui-content">
    <ul class="mui-table-view" style="margin-top: 0;">

      <li class="mui-table-view-cell">
        <router-link :to="{ name: 'yiliantiYx'}" class="mui-navigate-right" >魏都医院</router-link>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">浑源县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">左云县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">山阴县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">广灵县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">怀仁县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">右玉县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">大同市仁和医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">朔州市小浴煤矿医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">怀仁县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">右玉县人民医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">大同市仁和医院</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="yiliantiYx.html" class="mui-navigate-right">朔州市小浴煤矿医院</a>
      </li>
    </ul>
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
        created:function(){
            console.log(this.$route.params.id);
            var id=this.$route.params.id;
//            var page = 0;
            // 每页展示5个
            var size = 5;
//            var id=this.id;
            var  url= 'http://ons.me/tools/dropload/json.php?page='+id+'&size='+size;
            var _self=this;
            $.get(url,function(data){
                console.log(data);
                _self.msgg=data;
            })
        }
    }


    $(function(){

    })
</script>