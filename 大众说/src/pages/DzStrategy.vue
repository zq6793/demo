<template>
  <div class="DzStrategy">
    <dz-strategy-section :DzStrategyData="DzStrategyData"></dz-strategy-section>
    <dz-index-footer></dz-index-footer>
  </div>

</template>

<script>

    import DzIndexFooter from "../components/DzIndex/DzIndexFooter";
    import DzStrategySection from "../components/DzStrategy/DzStrategySection";
    import DzStrategyData from "../data/DzStrategyData"
    export default {
        name: "DzStrategy",
        components: {DzStrategySection, DzIndexFooter},
        data(){
          return {
            DzStrategyData
          }
        }
    }
</script>

<style scoped>
  .DzStrategy {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header{
    font-size: 0.12rem;
  }


</style>
