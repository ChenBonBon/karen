
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('../../bootstrap');

window.Vue = require('vue');

import App from '~components/Main.vue';
import store from '~stores/music'

import iView from 'iview';

import 'iview/dist/styles/iview.css';

Vue.use(iView);

const app = new Vue({
    store,
    ...App
});

app.$mount('#app');
window.app = app