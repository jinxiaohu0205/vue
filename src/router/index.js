import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import jinxiaohu from '@/components/jinxiaohu'
import hu from '@/components/hu'
import hu1 from '@/components/hu1'
import index from '@/components/index'
import mydisk from '@/components/mydisk'
import hospitallist from '@/components/hospitallist'
import yiliantiYx from '@/components/yiliantiYx'
import benyuanYx from '@/components/benyuanYx'
import target_folder_Yx from '@/components/target_folder_Yx'
import fenxiang from '@/components/fenxiang'
import yingX_chos1 from '@/components/yingX_chos1'
import baogaolist from '@/components/baogaolist'
import addRep_yingXiang from '@/components/addRep_yingXiang'
import yingxiang_chos from '@/components/yingxiang_chos'
import load from '@/components/load'
import demo from '@/components/demo'
import Login from '@/components/Login'
import rep_Autiting from '@/components/rep_Autiting'
import rep_statistics from '@/components/rep_statistics'
Vue.use(Router)

var router= new Router({
  routes: [
 	  	{
          path: '/',
          name: 'Login',
          component: Login
     },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/jinxiaohu',
          name: 'jinxiaohu',
          component: jinxiaohu,
          meta: {keepAlive: true} // 这个是需要keepalive的
      },
      {
          path: '/hu',
          name: 'hu',
          component: hu
      },
      {
          path: '/hu1',
          name: 'hu1',
          component: hu1
      },
      {
          path: '/index',
          name: 'index',
          component: index
      },
      {
          path: '/mydisk',
          name: 'mydisk',
          component: mydisk
      },
      {
          path: '/hospitallist',
          name: 'hospitallist',
          component: hospitallist
      },
      {
          path: '/yiliantiYx',
          name: 'yiliantiYx',
          component: yiliantiYx
      },
      {
          path: '/benyuanYx',
          name: 'benyuanYx',
          component: benyuanYx
      },
      {
          path: '/target_folder_Yx',
          name: 'target_folder_Yx',
          component: target_folder_Yx
      },
      {
          path: '/fenxiang',
          name: 'fenxiang',
          component: fenxiang
      },
      {
          path: '/yingX_chos1',
          name: 'yingX_chos1',
          component: yingX_chos1
      },
      {
          path: '/baogaolist',
          name: 'baogaolist',
          component: baogaolist
      },
      {
          path: '/addRep_yingXiang',
          name: 'addRep_yingXiang',
          component: addRep_yingXiang
      },
      {
          path: '/yingxiang_chos',
          name: 'yingxiang_chos',
          component: yingxiang_chos
      },
       {
          path: '/load',
          name: 'load',
          component: load
      },
      {
          path: '/demo',
          name: 'demo',
          component: demo
      },
      {
          path: '/rep_Autiting',
          name: 'rep_Autiting',
          component: rep_Autiting
      },
       {
          path: '/rep_statistics',
          name: 'rep_statistics',
          component: rep_statistics
      }
       
  ]
})

//router.beforeEach(function (to,from,next) {
//  if(to.path=="/"){
//      if(sessionStorage.teachLogin&&JSON.parse(sessionStorage.teachLogin).message=="成功") {
//          next("/HelloWorld");
//      }else{
//          next();
//      }
//
//
//  }else{
//      if(sessionStorage.teachLogin&&JSON.parse(sessionStorage.teachLogin).message=="成功"){
//          next();
//      }else{
//          next("/");	
//      }
//  }
//})

export default router

