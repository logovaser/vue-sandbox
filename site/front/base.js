import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import './base.less'

import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'

window.myVue = Vue;
Vue.use(VueRouter);

import router from './router'

const app = new Vue({
    router
}).$mount('#app');
