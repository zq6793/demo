<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="mingren">
     <ul>
     <li class='mingren-li-1'>
     <span class='mingren-span-1'>名人专区</span>
     <span class='mingren-span-2'>
     查看全部
     <img src='../../assets/img/keji-mingren-tubiao.png'/>
     </span>
     </li>
     <li class='mingren-li'>
        <p class='mingren-p-1' v-for='n in mingren'>
          <img  :src='n.img'/>
          <span class='mingren-span-3'>{{n.text}}
           <img class='mingren-img' src='../../assets/img/keji-mingren-ren.png'/>          
          </span>
        </p>
     </li>
        <li class='mingren-li-1'>
     <span class='mingren-span-1'>职场成长</span>
     <span class='mingren-span-2'>
     查看全部
     <img src='../../assets/img/keji-mingren-tubiao.png'/>
     </span>
     </li>
      <ul  class="ketang">
        <li class='mingren-li-3' v-for='n in ketang'>
        <span class='span-img'> <img class='mingren-img-1' :src='n.img'/></span>
        <p class='ketang-p-one'>
        <span class='ketang-span-one'>{{n.text1}}</span>
        <span>2.8小时 | 32讲</span>
        </p>
        <p class='ketang-p-two'>
        <span class='ketang-span-three'>{{n.text3}}</span>
        <span class='ketang-span-four'>超级会员免费</span>
        </p>
        </li>
      </ul>
     </ul>
     <div class="end">
       <p>没有更多了，去推荐看看吧</p>
       <span>前往推荐</span>
    </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
          mingren:[
              {
                  'img':'../../../static/img/keji-mingren-1.png',
                  'text':'黄西'
                  },
                    {
                  'img':'../../../static/img/keji-mingren-2.png',
                  'text':'张鹏'
                  },
                    {
                  'img':'../../../static/img/keji-mingren-3.png',
                  'text':'李淼'
                  },
                    {
                  'img':'../../../static/img/keji-mingren-4.png',
                  'text':'李银河'
                  }
          ],
               ketang:[
             {'img':'../../../static/img/school-zhichang-1.png',
              'text1':'经济+金融：从学业到就业',
              'text3':'免费',
             },
             {'img':'../../../static/img/school-zhichang-2.png',
              'text1':'提升公众表达的说服力和感染力',
              'text3':'￥9.9',
             },
               {'img':'../../../static/img/school-zhichang-3.png',
              'text1':'兵法思维：用《孙子兵法》智慧进行人生风险管理',
              'text3':'￥9.99',
             },
              {'img':'../../../static/img/school-zhichang-4.png',
              'text1':'懂了这些劳动法知识，保你职场无忧',
              'text3':'￥9.95',
             }
          ]

      }
   },
   activated() {
   }
}
</script>
