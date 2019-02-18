<style>

@import "../assets/css/idear.css"
</style>
<template>
    <div class='idear'>
      <Vs-Idear-Header></Vs-Idear-Header>
     <Vs-Idear-Zhong></Vs-Idear-Zhong>
     <Vs-Index-Footer></Vs-Index-Footer>
     <img class='quanju' src='../assets/img/idear-quan.png'/>
    </div>
</template>
<script>
import VsIdearHeader from '../components/vsidear/VsIdearHeader'
import VsIndexFooter from '../components/VsIndexFooter'
import VsIdearZhong from '../components/vsidear/VsIdearZhong'
export default {
   data() {
      return {
      }
   },
   components:{
       VsIdearHeader,
       VsIndexFooter,
        VsIdearZhong
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
      }
   },
}
</script>
