import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 自定义全局方法库
import PublicFun from './assets/js/exit_fun.js';
Vue.use(PublicFun);
const $u = {};
Vue.prototype.$u = $u;
import vuexStore from './store/$u.mixin';
Vue.mixin(vuexStore);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
