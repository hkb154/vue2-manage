import Vue from 'vue';

import 'reset-css';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/icons/index';
import './plugins/elementUI';
import './plugins/dataV';
import './plugins/vcharts.js';

import VueRouter from 'vue-router';



Vue.config.productionTip = false;


Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
