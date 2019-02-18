<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="book">
      <Vs-School-Le></Vs-School-Le>
      <Vs-School-Ketang  :lists="cartInfo"></Vs-School-Ketang>
      <Vs-School-Keji></Vs-School-Keji>
      <Vs-School-Mingren></Vs-School-Mingren>
    </div>
</template>
<script>
import VsSchoolLe from '../components/vsschool/VsSchoolLe'
import VsSchoolKetang from '../components/vsschool/VsSchoolKetang'
import VsSchoolKeji from '../components/vsschool/VsSchoolKeji'
import VsSchoolMingren from '../components/vsschool/VsSchoolMingren'
import CartApis from '../../apis/CartApis'
export default {
   data() {
      return {
           cartInfo:[]
      }
   },
   methods:{
              _initData(){
                CartApis. getSchools(data=>{
                    console.log(data)
                    this.cartInfo = data;
                })
            }
   },
    created(){
        this._initData()
     },
   activated() {
   },
   components:{
        VsSchoolLe,
    VsSchoolKetang,
    VsSchoolKeji,
    VsSchoolMingren,
   }
}
</script>
