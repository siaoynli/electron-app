import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import router from './router'
//引入pinia
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
