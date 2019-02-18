<style>
@import "../assets/css/index.css"
</style>
<template>
    <div class='index'>
    <Vs-Index-header></Vs-Index-header>
    <Vs-Index-Zhong></Vs-Index-Zhong>
    <Vs-Index-Footer></Vs-Index-Footer>
    </div>
</template>
<script>
import VsIndexHeader from '../components/VsIndexHeader'
import VsIndexZhong from '../components/VsIndexZhong'
import VsIndexFooter from '../components/VsIndexFooter'
export default {
   components: {
       VsIndexHeader,
      VsIndexZhong,
       VsIndexFooter,
   },
   mounted () {
  window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
      handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var foot = document.getElementsByClassName('footer')[0];
      var a = window.pageYOffset + window.innerHeight ;
      var b= document.documentElement.scrollHeight;
      if(scrollTop>10){
       foot.style.cssText='transform:translateY(.7rem);transition-duration:1s;'
      }else{
       foot.style.cssText='transform:translateY(0rem);transition-duration:1s;'
      }
      if(a==b){
       foot.style.cssText='transform:translateY(0rem);transition-duration:1s;'
      }
      },
      GoIdear(){
          this.$router.push('/VsIdear')
          this.$router.go(0)
      },
        GoIndex(){
          this.$router.push('/')
          this.$router.go(0)
      },
       GoSchool(){
           this.$router.push('/VsSchool')
          this.$router.go(0)
      },
       GoInform(){
           this.$router.push('/VsInform')
          this.$router.go(0)
      }
  }
}
</script>

