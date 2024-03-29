import Vue from "vue";

import { Button, Form, FormItem, Input, Message, 
    Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, 
    BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem, Tag,
    Table, TableColumn, Pagination, Upload, Avatar,
    Descriptions, DescriptionsItem, Switch
  } from 'element-ui';

  Vue.prototype.$message = Message

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
  Vue.use(Avatar);
  Vue.use(Descriptions);
  Vue.use(DescriptionsItem);
  Vue.use(Switch);