import Vue from 'vue'
import VueRouter from "vue-router";
import ApiHandlePage from "@/pages/ApiHandlePage";
import VideoHandlePage from "@/pages/VideoHandlePage";
import ImageHandlePage from "@/pages/ImageHandlePage";
import AboutMePage from "@/pages/AboutMePage";
import AudioHandlePage from "@/pages/AudioHandlePage";
import DocumentHandlePage from "@/pages/DocumentHandlePage";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: ApiHandlePage},
        {path: '/api', component: ApiHandlePage},
        {path: '/image', component: ImageHandlePage},
        {path: '/video', component: VideoHandlePage},
        {path: '/audio', component: AudioHandlePage},
        {path: '/document', component: DocumentHandlePage},
        {path: '/about', component: AboutMePage},
    ],
});

