import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import HC_more from 'highcharts/highcharts-more';
import dataModule from "highcharts/modules/data";
import store from "./store";

dataModule(Highcharts);
HC_more(Highcharts);

Vue.use(HighchartsVue);

Vue.config.productionTip = false;

Highcharts.setOptions({
  // options here
});

new Vue({
  components: {
    app: App
  },
  store,
  render: h => h(App),
}).$mount('#app');
