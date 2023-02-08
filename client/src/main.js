import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//styles
import "./assets/vendors/themify-icons/css/themify-icons.css"
import "./assets/css/steller.css"


import VueSmoothScroll from 'vue3-smooth-scroll'
createApp(App).use(store).use(router).use(VueSmoothScroll).mount('#app')
