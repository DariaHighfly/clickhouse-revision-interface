import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";

dataModule(Highcharts);

Vue.use(HighchartsVue);

Vue.config.productionTip = false;

Highcharts.setOptions({
  // options here
});

new Vue({
  render: h => h(App),
}).$mount('#app')
