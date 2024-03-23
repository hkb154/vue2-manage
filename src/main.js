import Vue from 'vue';

import 'reset-css';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/icons/index'

import { Button, Form, FormItem, Input, Message, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.prototype.$message = Message

Vue.use(VueRouter);

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
