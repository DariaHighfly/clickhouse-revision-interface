<template>
  <div id="app">
    <Navbar/>
    <div class="box">
      <Information/>
      <StatisticsCharts/>
      <StatisticsAllTests/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Information from "./components/Information"
import StatisticsCharts from "./components/StatisticsCharts"
import StatisticsAllTests from "./components/StatisticsAllTests"


export default {
  name: 'app',
  components: {
    Navbar,
    Information,
    StatisticsCharts,
    StatisticsAllTests,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
  .box {
    padding: 0 140px 0 140px;
  }
</style>
