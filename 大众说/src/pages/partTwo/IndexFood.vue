<template>
  <div>
    <index-food-header></index-food-header>
    <index-food-content :IndexFoodData="IndexFoodData"></index-food-content>
  </div>
</template>

<script>
  import "../../assets/css/iconfont.css"
  import IndexFoodHeader from "../../components/IndexFood/IndexFoodHeader"
  import IndexFoodContent from "../../components/IndexFood/IndexFoodContent"
  import IndexFoodData from "../../data/IndexFood/IndexFoodData"

    export default {
        name: "IndexFood",
        components:{
          IndexFoodHeader,
          IndexFoodContent
        },
        data(){
          return{
            IndexFoodData
          }
        }
    }
</script>

<style scoped>

</style>
