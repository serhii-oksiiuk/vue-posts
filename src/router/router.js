
import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostSingle from "@/pages/PostSingle";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostSingle
    }

]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
  export default router;