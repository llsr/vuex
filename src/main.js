import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// let vuexStore = require('@/store/$u.mixin.js');
import vuexStore from './store/$u.mixin';
Vue.mixin(vuexStore);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
