import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const app = createApp(App)
app.use(router)
app.use(VueVideoPlayer)
app.mount('#app')
