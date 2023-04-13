import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

new VueElement({
    render(createElement){
        return createElement(app)
    }
})