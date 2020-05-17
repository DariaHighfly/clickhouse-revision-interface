import App from './App.vue'
import store from "./store";
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import dataModule from "highcharts/modules/data";
import stockInit from "highcharts/modules/stock";
import HighchartsExporting from 'highcharts/modules/exporting';

// put all stuff (modules) in 'if'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  stockInit(Highcharts);
  dataModule(Highcharts);
  HC_more(Highcharts);
}

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
