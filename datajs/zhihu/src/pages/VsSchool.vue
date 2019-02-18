<style>

@import  '../assets/css/school.css'

</style>
<template>
    <div class="school">
      <Vs-School-Header  @ee='show'></Vs-School-Header>
         <div :is="flag"></div>
      <div class='school-quan'></div>
      <Vs-Index-Footer></Vs-Index-Footer>
    </div>
</template>
<script>
import VsSchoolHeader from '../components/vsschool/VsSchoolHeader'
import VsIndexFooter from '../components/VsIndexFooter'
import  VsBook from './VsBook'
import VsRead from './VsRead'
export default {
     data(){
    return{
     flag:"VsBook"
    }
  },
   components:{
    VsSchoolHeader,
    VsIndexFooter,
    VsRead,
    VsBook,
   },
     created(){
           this._initData()
        },
   methods: {
       show(n){
             if(n == "VsBook"){
                      this.flag = "VsBook"
                   }else {
                     this.flag = "VsRead"
                         document.getElementsByClassName('read').cssText=' color: #f1aa6c; border-bottom: 2px solid #f1aa6c;'
      document.getElementsByClassName('ke').cssText=' color: #a09a9a;border-bottom:0;'
                    }
                },
                
   },
   activated() {
   }
}
</script>
