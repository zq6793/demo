<style>


</style>
<template>
    <div class="read-le">
<ul>
    <li><img class='school-imgs' src='../../assets/img/read-1.png'/></li>
   <li class='read-li-1'>
          <span class='span-img'  v-for='n in mingren'><img class='read-img-2' :src='n.img'/> <span>{{n.text}}
          </span></span>
     </li>
     <li>
        <img class='read-book' src='../../assets/img/read-2.png'/>
     </li>
     <li class='mingren-li-1'>
     <span class='mingren-span-1'>名人专区</span>
     <span class='mingren-span-2'>
     查看全部
     <img src='../../assets/img/keji-mingren-tubiao.png'/>
     </span>
     </li>
     <li class='mingren-li'>
        <p class='mingren-p-1' v-for='n in mingrens'>
          <img class='read-img-1'  :src='n.img'/>
          <span class='mingren-span-3'>{{n.text}}
           <img class='mingren-img' src='../../assets/img/keji-mingren-ren.png'/>          
          </span>
        </p>
     </li>
     <li class='mingren-li-1'>
     <span class='mingren-span-1'>读书会·领读</span>
     <span class='mingren-span-2'>
     查看全部
     <img src='../../assets/img/keji-mingren-tubiao.png'/>
     </span>
     </li>
     <li class='lingread'>
     <span class='lingread-span' v-for='n in text1'>{{n}}</span>
     </li>
     <li class='lingread'>
     <span class='lingread-span' v-for='n in text2'>{{n}}</span>
     </li>
     <ul class='ketang'>
      <li class='read-ul-li' v-for='n in ketang'>
        <span class='span-img'> <img :src='n.img'/></span>
        <p class='ketang-p-one'>
        <span class='ketang-span-one'>{{n.text1}}</span>
        <span class='ketang-span-two'>{{n.text2}}</span>
        <span class='ketang-span-four'>{{n.text4}}</span>
        </p>
        <p class='ketang-p-two'>
        <span class='ketang-span-three'>{{n.text3}}</span>
        <span class='ketang-span-four'>超级会员免费</span>
        </p>
    </li>
    </ul>
     <li class='mingren-li-1'>
     <span class='mingren-span-1'>电子书推荐</span>
     <span class='mingren-span-2'>
     查看全部
     <img src='../../assets/img/keji-mingren-tubiao.png'/>
     </span>
     </li>
     <li class='read-dian'>
       <p>
         <img src='../../assets/img/read-book-1.png'/>
         <span class='read-book-span-1'>写给大人的睡前故事</span>
         <span class='read-book-span-2'>陈湛</span>
       </p>
     </li>
      <li class='read-dian'>
       <p>
         <img src='../../assets/img/read-book-1.png'/>
         <span class='read-book-span-1'>写给大人的睡前故事</span>
         <span class='read-book-span-2'>陈湛</span>
       </p>
     </li>
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
                  'img':'../../../static/img/read-le-1.png',
                  'text':'会员专区'
                  },
                    {
                  'img':'../../../static/img/read-le-2.png',
                  'text':'免费'
                  },
                    {
                   'img':'../../../static/img/read-le-3.png',
                  'text':'榜单'
                  },
                    {
                   'img':'../../../static/img/read-le-4.png',
                   'text':'分类'
                  },
                   {
                   'img':'../../../static/img/read-le-5.png',
                   'text':'书架'
                  }
          ],
           mingrens:[
              {
                  'img':'../../../static/img/read-mingren-1.png',
                  'text':'韩松林'
                  },
                    {
                  'img':'../../../static/img/read-mingren-2.png',
                  'text':'张振亮'
                  },
                    {
                  'img':'../../../static/img/read-mingren-3.png',
                  'text':'雷姬'
                  },
                    {
                  'img':'../../../static/img/read-mingren-4.png',
                  'text':'蔡骏'
                  }
          ],
          text1:[
              '人文艺术','商学院','职场成长','互联网'         ],
          text2:[
              '文学小说','心理情感','生活研修','科技科普'
          ],
          ketang:[
             {'img':'../../../static/img/lingdu-1.png',
              'text1':'平台改革',
              'text2':'领读人：周文艺',
              'text4':'是什么推动了世界经济结构的革命性转变？',
              'text3':'￥5.9',
             },
             {'img':'../../../static/img/lingdu-2.png',
              'text1':'阴翳礼赞',
              'text2':'领读人：小岩井',
               'text4':'是什么让谷崎润一郎如此痴迷日式传统厕所？',
              'text3':'￥4.9',
             },
               {'img':'../../../static/img/lingdu-3.png',
              'text1':'彼得林奇教你理财',
              'text2':'领读人：周勇',
               'text4':'在风险中获得投资收益需要掌握哪些思维？',
              'text3':'￥9.95',
             }
          ]
      }
   },
   methods: {
        
   },
   activated() {
   }
}
</script>
