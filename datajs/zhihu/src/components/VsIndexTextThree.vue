<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class='text'>
        <p class='text_header'>
           <img src='../assets/img/index-text-small-3.png'/>
           <span>管老太关注了专栏 · 12小时前</span>
        </p>
       <Vs-Text-Three-One></Vs-Text-Three-One>
        <p class='text_footer'>
        <span>117文章 · 412345关注</span>
        </p>
    </div>
</template>
<script>
import VsTextThreeOne from './VsTextThreeOne'
export default {
   data() {
      return {
      }
   },
   components:{
     VsTextThreeOne
   },
   activated() {
   }
}
</script>
