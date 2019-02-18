<style>
@import '../assets/css/inform.css'
</style>
<template>
    <div class="inform">
       <Vs-Inform-Header></Vs-Inform-Header>
        <div class='color'></div>
       <Vs-Inform-Le></Vs-Inform-Le>
       <Vs-Inform-Dun></Vs-Inform-Dun>
       <div class='text'>没有更多内容</div>
       <Vs-Index-Footer></Vs-Index-Footer>
    </div>
</template>
<script>
import VsInformHeader from '../components/vsinform/VsInformHeader'
import VsInformLe from '../components/vsinform/VsInformLe'
import VsInformDun from '../components/vsinform/VsInformDun'
import VsIndexFooter from '../components/VsIndexFooter'
export default {
   data() {
      return {
      }
   },
   components:{
      VsInformHeader,
      VsInformLe,
      VsInformDun,
      VsIndexFooter,
   },
   activated() {
   },
   methods: {
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
      },
   },
}
</script>
