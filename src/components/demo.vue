<template>
<div>
	<div id='example-3'>
		  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		  <label for="jack">Jack</label>
		  <input type="checkbox" id="john" value="John" v-model="checkedNames">
		  <label for="john">John</label>
		  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		  <label for="mike">Mike</label>
		  <br>
		  <span v-bind:style="ld">{{checkedNames}}</span>
		  <div @click="go">go</div>
		  <input type="radio" id="jack" value="Jack" v-model="checkedNames">
		  <label for="jack">Jack</label>
		  <input type="radio" id="john" value="John" v-model="checkedNames">
		  <label for="john">John</label>
		  <input type="radio" id="mike" value="Mike" v-model="checkedNames">
		  <label for="mike">Mike</label>
		  <input type="text" v-model="msd"/><span>{{msd}}</span>
		  <input type="text" :value="msd"/>
	</div>
</div>
</template>

<script>
   export default {
    name: 'hello',
        data () {
            return {
                 checkedNames: [],
                 ld:{
                 	color:'red'
                 },
                 msd:'hellow'
            }
        },
        
        methods:{
        	go(){
//      		var arr=[];
//      		$("input[type='kradio']:checked").each(function(val,ind){
//      			console.log(val,ind.value);
//      			arr.push(ind.value);
//      		})
//      		console.log(arr);
				const dd=$("input[type='radio']:checked").val();
				console.log(typeof(dd));
        	}
        }
  };
</script>

<style scoped="">

	 
</style>