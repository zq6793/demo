<style>


</style>
<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
        <img src='../../assets/img/idear-swripe-1.png'/>
        <ul>
        <li class='li-one'>正在讨论</li>
        <li class='li-two'>我和春节【抢票】的故事</li>
        <li class='li-three'>争分夺秒！聊聊抢票那些事</li>
        </ul>
        </div>
        <div class="swiper-slide"> 
        <img src='../../assets/img/idear-swripe-2.png'/>
        <ul>
        <li class='li-one'>正在讨论</li>
        <li class='li-two'>上班族，你还好吗？</li>
        <li class='li-three'>聊聊上班族的身心健康</li>
        </ul></div>
        <div class="swiper-slide">
        <img src='../../assets/img/idear-swripe-3.png'/>
        <ul>
        <li class='li-one'>正在讨论</li>
        <li class='li-two'>回首这一年，你都走过了哪里？</li>
        <li class='li-three'>已产生1936条想法</li>
        </ul></div>
    </div>
 </div>
</template>
<script>
import Swiper from 'swiper';
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    autoplay: {
    disableOnInteraction: false,
  },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
   },
}
</script>
