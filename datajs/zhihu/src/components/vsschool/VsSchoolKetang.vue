<style>

 

</style>
<template>
    <div class="ketang">
      <h2>编辑推荐</h2>
      <ul>
        <li v-for='n in ketang'>
        <span class='span-img'> <img :src='n.img'/></span>
        <p class='ketang-p-one'>
        <span class='ketang-span-one'>{{n.text1}}</span>
        <span class='ketang-span-two'>{{n.text2}}</span>
        <span>2.8小时 | 32讲</span>
        </p>
        <p class='ketang-p-two'>
        <span class='ketang-span-three'>{{n.text3}}</span>
        <span class='ketang-span-four'>超级会员免费</span>
        </p>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  props:["lists"],
   data() {
      return {
          ketang:[
             {'img':'../../../static/img/school-ketang-1.png',
              'text1':'释放压力、提升专注的24堂正念课',
              'text2':'刘宇，哈佛大学硕士、博士...',
              'text3':'￥79.2',
             },
             {'img':'../../../static/img/school-ketang-2.png',
              'text1':'黄西的幽默沟通课：从自卑到自信的表达艺术',
              'text2':'黄西，脱口秀演员，节目主...',
              'text3':'￥49',
             },
               {'img':'../../../static/img/school-ketang-3.png',
              'text1':'摄影入门大全：教你拍出惊人之作',
              'text2':'美国VSO，来自美国洛杉矶...',
              'text3':'￥99.5',
             }
          ]
          
      }
   },
   activated() {
   },
}
</script>
