<template>
     <div class="box">
            <div class="photo">

            </div>

            <username
              top="3.9rem"
              placeholder="请输入用户名"
              type="text"
              icon="mui-icon-person"
              @getval="getval"
              prop="name"
            ></username>

            <username
                top="0.3rem"
                placeholder="请输入密码"
                type="password"
                icon="mui-icon-locked"
                @getval="getval"
                prop="pass"
            ></username>
          <div class="btn" @click="submit">
              Login
          </div>
     </div>
</template>

<script>
    import username from "@/components/input.vue"
    export default {
        name: "login",
        components:{username},
        data(){
          return {

          }
        },
        methods:{
            getval(attr,name){
            	console.log(typeof(attr));
                this[attr]=name;
            },
            submit(){
                console.log(this.name);
                console.log(this.pass);
                var params="account="+this.name+"&password="+this.pass;
this.$http.get('/api/MedicalUnicom/app/user/login?'+params).then(response =>{
//          	var params="mobile/"+this.name+"/password/"+this.pass;
//	            this.$http.get('/api/index.php/App/Login/login/'+params).then(response =>{
					if(response.data.code==-1){
						console.log(response.data);
						console.log(response)
						layer.msg('用户名或密码错误');
					}else{
						 this.$router.push("/HelloWorld");
						 sessionStorage.teachLogin=JSON.stringify(response.data);
						 console.log(sessionStorage.teachLogin);
						 console.log(response.data);
//						 sessionStorage.clear();
					}
	            },response=>{
	                console.log("error");
	            })
 
            }
       }

    }
</script>

<style scoped>


     .box{
         width:100vw;
         height:100vh;
         background: url("../assets/img/bg.jpg") center no-repeat;
         background-size: cover;
         float:left;
     }
     .mui-icon{
         color:#fff;
     }
    .photo{
        width:1.2rem;height:1.2rem;
        border:3px solid #fff;
        margin:auto;
        border-radius: 50%;
        position: relative;
        margin-top:2.35rem;
    }


    .btn{
        width:5.65rem;
        height:0.88rem;
        margin:auto;
        margin-top:0.3rem;
        border-radius: 0.2rem;
        text-align: center;
        line-height: 0.88rem;
        color:#fff;
        background:#ff2672 ;
    }
     .btn:active{
         box-shadow: 0 0 5px #000;
     }
</style>