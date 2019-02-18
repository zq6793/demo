<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div>
 <Vs-Idear-Swiper></Vs-Idear-Swiper>
       <Vs-Idear-New></Vs-Idear-New>
       <Vs-Idear-Text-One></Vs-Idear-Text-One>
     <Vs-Idear-Text-Two></Vs-Idear-Text-Two>
     <Vs-Idear-Text-Three></Vs-Idear-Text-Three>
     <Vs-Idear-Text-Four></Vs-Idear-Text-Four>
     <Vs-Idear-End></Vs-Idear-End>
    </div>
</template>
<script>
import VsIdearSwiper from './VsIdearSwiper' 
import VsIdearNew from './VsIdearNew'
import VsIdearTextOne from './VsIdearTextOne'
import VsIdearTextTwo from './VsIdearTextTwo'
import VsIdearTextThree from './VsIdearTextThree'
import VsIdearTextFour from './VsIdearTextFour'
import VsIdearEnd from './VsIdearEnd'
export default {
   data() {
      return {
      }
   },
   components:{
 VsIdearSwiper,
       VsIdearNew,
       VsIdearTextOne,
       VsIdearTextTwo,
       VsIdearTextThree,
       VsIdearTextFour,
       VsIdearEnd,
   },
   activated() {
   }
}
</script>
