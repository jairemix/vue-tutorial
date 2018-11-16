import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import 'vue-awesome/icons';
import VIcon from 'vue-awesome/components/Icon.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

Vue.component('v-icon', VIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
