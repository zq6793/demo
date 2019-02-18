<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div>
       <Vs-Index-Run></Vs-Index-Run>
    <Vs-Index-Text></Vs-Index-Text>
    <Vs-Index-Text-Two></Vs-Index-Text-Two>
    <Vs-Index-Text-Three></Vs-Index-Text-Three>
    <Vs-Index-Text-Four></Vs-Index-Text-Four>
    <Vs-Index-Text-Five></Vs-Index-Text-Five>
    <Vs-Index-End></Vs-Index-End>
     <div class='index-quan'></div>
    </div>
</template>
<script>
import VsIndexRun from './VsIndexRun'
import VsIndexText from './VsIndexText'
import VsIndexTextTwo from './VsIndexTextTwo'
import VsIndexTextThree from './VsIndexTextThree'
import VsIndexTextFour from './VsIndexTextfour'
import VsIndexTextFive from './VsIndexTextFive'
import VsIndexEnd from './VsIndexEnd'
export default {
   data() {
      return {
      }
   },
   components:{
          VsIndexRun,
       VsIndexText,
       VsIndexTextTwo,
       VsIndexTextThree,
       VsIndexTextFour,
       VsIndexTextFive,
       VsIndexEnd,
   },
   activated() {
   }
}
</script>
