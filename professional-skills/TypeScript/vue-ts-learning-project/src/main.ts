import { createApp } from 'vue'
import './style.css'
import { runSyntax } from './syntax/init'
import App from './App.vue'

runSyntax()

createApp(App).mount('#app')
