<template scoped>
  <div id="app">
    <!-- 这里是需要keepalive的 -->
		<keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
	
	<!-- 这里不会被keepalive -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
  @import './../static/css/app.css'; /*引入公共样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 44px;*/
}
</style>

<script>

  $(function(){
      $(".jj").click(function(){
          alert(1);
      })
  })
</script>
