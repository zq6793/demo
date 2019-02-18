<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="schoolheader">
      <ul>
      <li>
      <img class='school-header-tu' src='../../assets/img/idear-header-man.png'/>
      <p>
         <span class='school-header-1'>
           开通会员
           <img src='../../assets/img/school-header-3.png'/>
         </span>
         <span class='school-header-2'>课堂随意听，好书任意读</span>
      </p>
      <img class='school-header-shu' src='../../assets/img/school-header-1.png'/>
      <img class='school-header-soushu' src='../../assets/img/school-header-2.png'/>
      </li>
      <li class='daohang'>
      <span class='ke' @click='submit("VsBook")'>课堂</span>
      <span class='read'  @click='submit("VsRead")'>读书会</span>
      </li>
      </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   methods: {
      submit(n){
         this.$emit('ee',n)
         if(n=='VsBook'){
              document.getElementsByClassName('ke')[0].style.cssText='color: #f1aa6c; border-bottom:2px solid #f1aa6c;';
              document.getElementsByClassName('read')[0].style.cssText=' color: #a09a9a;border-bottom:0;';
         }else{
            console.log('2')
              document.getElementsByClassName('read')[0].style.cssText=' color: #f1aa6c; border-bottom: 2px solid #f1aa6c;';
              document.getElementsByClassName('ke')[0].style.cssText=' color: #a09a9a;border-bottom:0;';
         }
      },
      changebook(){
              
      },
      changeread(){
            
      }
   },
   activated() {
   }
}
</script>
