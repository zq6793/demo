<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="le">
    <ul>
    <li><img class='school-imgs' src='../../assets/img/school-imgs.png'/></li>
    <li>
   <span class='span-img'><img src='../../assets/img/school-1.png'/><span>职场成长</span></span>
     <span class='span-img'><img src='../../assets/img/school-2.png'/><span>心理情感</span></span>
  <span class='span-img'><img src='../../assets/img/school-3.png'/><span>培训考试</span></span>
 <span class='span-img'><img src='../../assets/img/school-4.png'/><span>互联网</span></span>
 <span class='span-img'><img src='../../assets/img/school-5.png'/><span>商学院</span></span>
    </li>
    <li>
 <span class='span-img'><img src='../../assets/img/school-6.png'/><span>生活研修</span></span>
 <span class='span-img'><img src='../../assets/img/school-7.png'/><span>科技科普</span></span>
 <span class='span-img'><img src='../../assets/img/school-8.png'/><span>健康学堂</span></span>
 <span class='span-img'><img src='../../assets/img/school-9.png'/><span>人文艺术</span></span>
 <span class='span-img'><img src='../../assets/img/school-10.png'/><span>任务中心</span></span>
    </li>
    </ul>
    </div>
    
</template>
<script>
import VsSchoolKetang from '../vsschool/VsSchoolKetang'
export default {
   data() {
      return {
      }
   },
   components:{
    VsSchoolKetang,
   },
   activated() {
   }
}
</script>
