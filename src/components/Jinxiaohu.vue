<style scoped>
  @import './../../static/css/app.css'; /*引入公共样式*/
  h1{
    font-size: 12px;
  }
  .a{
  	display:block;
  	text-align: left;
  	padding-top: 10px;
  }
</style>
<template>
<div class="hello">
	<img src="../assets/logo.png" alt="" />
  <router-link v-for="item in msg" :to="{ name: 'hu', params: { id:item.id,sid:22}}" class="a">{{ item.title }}</router-link>
  <div class="btn" @click="submit" >
              Login
  </div>
  <div v-show="msg.length==0">暂无数据</div>
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
        	submit(){
        		var page =1;
            // 每页展示5个
            var size = 100;
            var _self=this;
            this.$http.get('http://ons.me/tools/dropload/json.php?page='+page+'&size='+size).then(response =>{
            	console.log(response)
                console.log(response.data);
                _self.msg=response.data;
            },response=>{
                console.log("error");
            })
        	}
        },
        created:function(){
 					console.log(this.$route.params.zzid);
        },
        mounted:function(){
  				console.log(this.$route.params.zzid);
        }

    }

</script>
