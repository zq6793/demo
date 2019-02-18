<style>

</style>
<template>
   <div class='footer'>
   <router-link to="/VsIndex"
      tag='p' 
      active-class='one'
      @click.native='refresh'>
 <i class='iconfont one icon-shouyejiedan'></i>
 <span class='one'>首页</span>
 </router-link>
   <router-link to="/VsIdear"
      tag='p' 
      active-class='one'
       @click.native='refresh'>
 <i class='iconfont icon-huaban-'></i>
 <span>想法</span>
</router-link>
     <router-link to="/VsSchool"
      tag='p' 
      active-class='one'
       @click.native='refresh'>
 <i class='iconfont icon-genjufenshuxuandaxues'></i>
 <span>大学</span>
  </router-link>
     <router-link to="/VsInform"
      tag='p' 
      active-class='one'
       @click.native='refresh'>
 <i class='iconfont icon-tongzhi'></i>
 <span>通知</span>
  </router-link>
     <router-link to="/VsMy"
      tag='p' 
      active-class='one'
       @click.native='refresh'>
 <i class='iconfont icon-wode'></i>
 <span>我的</span>
   </router-link>
   </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   methods: {
      refresh(){
        this.$router.go(0);
      }
   },
}
</script>
