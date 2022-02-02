import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

createApp(App).mount('#app')
