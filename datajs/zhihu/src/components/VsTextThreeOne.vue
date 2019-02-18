<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="text_one">
       <img src='../assets/img/index-text-imgs-1.png'/>
       <Vs-Three-One-One></Vs-Three-One-One>
    </div>
</template>
<script>
import VsThreeOneOne from './VsThreeOneOne'
export default {
   data() {
      return {
      }
   },
   components:{
     VsThreeOneOne
   },
   activated() {
   }
}
</script>
