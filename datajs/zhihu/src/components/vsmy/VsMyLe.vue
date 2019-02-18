<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="my-le">
     <ul>
     <li class='my-li-1'>
      <img src='../../assets/img/my-le-1.png'/>
     </li>
     <li class='my-li-2'>
        <p>
        <span class='my-le-span-1'>0</span>
        <span class='my-le-span-2'>我的创作</span>
        </p>
         <p>
        <span class='my-le-span-1'>12</span>
        <span class='my-le-span-2'>关注</span>
        </p>
         <p>
        <span class='my-le-span-1'>0</span>
        <span class='my-le-span-2'>我的收藏</span>
        </p>
         <p>
        <span class='my-le-span-1'>5</span>
        <span class='my-le-span-2'>最近浏览</span>
        </p>
     </li>  
     <li class='my-li-3'>
      <p v-for='n in lists.mytext'>
       <img :src='n.img'/>
       <span>{{n.text}}</span>
      </p>
     </li>
     <li class='my-li-3 my-li-3-1'>
      <p v-for='n in lists.mytext1'>
       <img :src='n.img'/>
       <span>{{n.text}}</span>
      </p>
     </li>
     <li class='my-li-3'>
      <p v-for='n in lists.assmytext2'>
       <img :src='n.img'/>
       <span>{{n.text}}</span>
      </p>
     </li>
     <li class='my-li-4'>
       <p>
         <span class='li-4-span-1'>
          <img src='../../assets/img/my-hunda-1.png'/>
          <span class='li-4-span-2'>回答问题</span>
         </span>
         <span class='li-4-span-3'>更多问题</span>
       </p>
         <ul>
          <li class='my-li-5'>
            <h3>小孩怎么才能少吃糖？</h3>
            <p>
              <span class='my-li-5-span-1'>9人关注</span>
              <span class='my-li-5-span-2'>
               <span class='my-li-5-span-3'>
                 <img src='../../assets/img/my-hu-1.png'/>
                 <span class='my-li-5-span-4'>忽略</span>
               </span>
               <span class='my-li-5-span-5'>
                 <img src='../../assets/img/my-hu-2.png'/>
                 <span class='my-li-5-span-6'>回答</span>
               </span>
              </span> 
            </p>
          </li>
         </ul>
     </li>
          <li class='div-kong'></li>
     <li class='my-li-6'>
      <p>
         <span class='li-4-span-1'>
          <img src='../../assets/img/my-video-1.png'/>
          <span class='li-4-span-2'>视频创作</span>
         </span>
         <span class='li-4-span-3'>拍一个</span>
       </p>
  <div class="swiper-container">
       <div class="swiper-wrapper">
        <div class="swiper-slide"><img src='../../assets/img/my-swers-4.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-swiper-3.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-swiper-1.png'/></div>
        <div class="swiper-slide"><p class='swiper-p'>
         <span class='swiper-span'>全部挑战</span>
        </p></div>
  </div>
</div>
     </li>
     <li class='div-kong'></li>
      <li class='my-li-6'>
      <p>
         <span class='li-4-span-1'>
          <img src='../../assets/img/my-swir-1-1.png'/>
          <span class='li-4-span-2'>想法</span>
         </span>
         <span class='li-4-span-3'>去往想法首页</span>
       </p>
  <div class="swiper-container">
       <div class="swiper-wrapper">
        <div class="swiper-slide"><img src='../../assets/img/my-s-1.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-s-3.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-s-2.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-s-3.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-s-1.png'/></div>
        <div class="swiper-slide"><img src='../../assets/img/my-s-2.png'/></div>
  </div>
</div>
     </li>
     <li class='my-li-7'>
     <img src='../../assets/img/my-end.png'/>
     </li>
     </ul>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    props:["lists"],
  
   mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
        normalizeSlideIndex:false,
        slidesPerView: 1.3,
  })        
   },
   activated() {
   }
}
</script>
