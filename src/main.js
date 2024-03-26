import Vue from 'vue';

import 'reset-css';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/icons/index'

import { Button, Form, FormItem, Input, Message, 
         Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, 
         BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem, Tag,
         Table, TableColumn, Pagination, Upload
       } from 'element-ui';
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
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Upload);


new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
