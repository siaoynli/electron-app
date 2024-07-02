import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import router from './router'
//引入pinia
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

createApp(App).use(store).use(router).mount('#app')
