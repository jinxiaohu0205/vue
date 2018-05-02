<style>
  @import './../../static/css/app.css'; /*引入公共样式*/
  h1{
    color: blue;
  }
</style>
<template>
<div class="hello">
<!--  <router-link v-for="item in msgg" :to="{ name: 'hu1', params: { id: 1 }}">{{ item.title }}</router-link>-->
 <div style="height: 100vh;width: 100%;">
<iframe id="iframe1" src="https:www.baidu.com" style="height: 100%;width:100%;border: none;"></iframe>
</div>
</div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msgg: [],
                msg:""
            }
        },

        created:function(){
            console.log(this.$route.params.id);
            console.log(this.$route.params.sid);
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
</script>