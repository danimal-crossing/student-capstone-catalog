import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? " https://salty-everglades-72150.herokuapp.com/" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
