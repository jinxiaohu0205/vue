<style scoped>
.main {
			padding-bottom: 1rem;
		}
		
		.mui-content>.mui-table-view:first-child {
			margin-top: 0;
		}
		
		.main_title {
			border-left: 5px solid #0E86FF;
			padding-left: 0.1rem;
			font-size: 0.31rem;
		}
		.mui-collapse{
			text-align: left;
			height: auto;
			min-height: 1rem;
			line-height: 0.6rem;
		}
	
		
		.main_content {
			border: none;
			padding: 0;
		}
		
		.main_bottom {
			width: 100%;
			height: 1rem;
			position: fixed;
			bottom: 0;
			line-height: 1rem;
			border-top: 1px solid #CDCDCD;
			background-color: #FFF;
		}
		
		.save {
			display: inline-block;
			width: 32%;
			text-align: center;
			color: #3398FE;
			font-size: 0.31rem;
		}
		
		.saveAsMuban {
			display: inline-block;
			width: 30%;
			text-align: center;
			color: #3398FE;
			border-left: 1px solid #D0D1D1;
			font-size: 0.31rem;
		}
		
		.delete {
			display: inline-block;
			width: 30%;
			text-align: center;
			color: #FC5A4B;
			border-left: 1px solid #D0D1D1;
			font-size: 0.31rem;
		}
		
		.yingxiang {
			padding: 0;
		}
		
		.yingxiang div {
			display: inline-block;
			width: 1.6rem;
		}
		
		.yingxiang img {
			width: 1.6rem;
		}
		.mui-checkbox input[type=checkbox]:checked:before, .mui-radio input[type=radio]:checked:before{
			    color: skyblue;
		}
		.mui-checkbox input[type=checkbox][disabled]:before, .mui-radio input[type=radio][disabled]:before{
			opacity: 3.3;
		}
		.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{
			left: 0.9rem;
		}
		.mui-checkbox{
			height: 1.6rem;
		}
</style>
<template>
<div class="hello">
  <header class="mui-bar mui-bar-nav" style="background: #FFFFFF;">
		<span class="mui-icon mui-icon-left-nav mui-pull-left" @click="goback" style="color: #0D85FD;"></span>
		<h1 class="mui-title">选择典型影像</h1>
		<button class="mui-pull-right" id="choose_btn" @click="save">保存</button>
	</header>
	<div class="mui-content">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#"><span class="main_title">序列1(6张)</span></a>
						<div class="mui-collapse-content main_li2 yingxiang">
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							
						</div>
					</li>

					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#"><span class="main_title">序列2(12张)</span></a>
						<div class="mui-collapse-content main_li2 yingxiang">
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							
						</div>
					</li>
					
					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#"><span class="main_title">序列1(6张)</span></a>
						<div class="mui-collapse-content main_li2 yingxiang">
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							
						</div>
					</li>
					
					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#"><span class="main_title">序列1(6张)</span></a>
						<div class="mui-collapse-content main_li2 yingxiang">
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"  style="color:red;" class="check_show">
							</div>
							<div class="mui-input-row mui-checkbox mui-left">
								<img src="static/images/yingxiang_text.png" alt="" data-preview-src="" data-preview-group="1" @click="xuanze($event)"/>
								<input name="checkbox1"  type="checkbox"   style="color:red;" class="check_show">
							</div>
							
						</div>
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
                msg: []
            }
        },
        methods:{
        	goback:function(){
	    			this.$router.go(-1);
    			},
	        xuanze:function (evnet){
	        	var this1=event.currentTarget;
//						$(this1).next().toggle();
					},
	        save:function (){
	        	console.log($(".check_show:checked").prev());
	        }
        },
        mounted:function(){

        }

    }

</script>
<!--<script>-->


<!--</script>-->