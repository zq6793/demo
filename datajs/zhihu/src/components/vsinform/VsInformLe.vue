<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="inform-le">
         <span class='inform-le-span-1'><img src='../../assets/img/inform-le-1.png'/></span>
         <p>
         <span class='inform-le-span-2'>私信</span>
         <span class='inform-le-span-3'>知乎大学小管家：亲爱的 小强 你好：程...</span>
         </p>
         <img src='../../assets/img/inform-le-jiant.png'/>
      </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
    mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    autoplay: {
    disableOnInteraction: false,
  },
   activated() {
   }
})
    }
}
</script>
