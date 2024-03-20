import Vue from 'vue';

import 'reset-css';
import App from './App.vue';
import store from './store';
import router from './router';

import { Button, Form, FormItem, Input } from 'element-ui';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
