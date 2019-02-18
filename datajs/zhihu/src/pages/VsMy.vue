<style>
@import  '../assets/css/my.css'
</style>
<template>
    <div class="my">
<Vs-My-Header></Vs-My-Header>
  <Vs-My-Le :lists="cartInfo"></Vs-My-Le>  
  <Vs-Index-Footer></Vs-Index-Footer>
    </div>
</template>
<script>
import VsMyHeader from '../components/vsmy/VsMyHeader'
import VsMyLe from '../components/vsmy/VsMyLe'
import VsIndexFooter from '../components/VsIndexFooter'
import CartApis from '../../apis/CartApis'
export default {
   data() {
      return {
        cartInfo:[]
      }
   },
   components:{
       VsMyHeader,
       VsMyLe,
     VsIndexFooter,
   },
    methods:{
     _initData(){
                CartApis.getCarts(data=>{
                    console.log(data)
                    this.cartInfo = data;
                })
            }
       },
     created(){
        this._initData()
      },
   activated() {
   }
}
</script>
