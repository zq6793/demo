<template>
  <div class="DzMine">
    <dz-mine-section :DzMineData="DzMineData" :username="username"></dz-mine-section>
    <dz-index-footer></dz-index-footer>
  </div>

</template>

<script>
    import DzIndexFooter from "../components/DzIndex/DzIndexFooter";
    import DzMineSection from "../components/DzMine/DzMineSection";
    import DzMineData from "../data/DzMineData"
    export default {
        name: "DzMine",
        components: {DzMineSection, DzIndexFooter},
        data(){
            return {
              DzMineData,
              username:""
            }
        },
        mounted(){
          console.log(this.$route.params)
          this.username=this.$route.params.phoneNum;
        },
    }
</script>

<style scoped>
  .DzMine {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
