import Vue from 'vue'
import Router from 'vue-router'

import index from "@/view/index.vue";
import ListPage from "@/view/listPage.vue";
import videoPage from "@/view/videoPage.vue";
import mapPage from "@/view/mapPage.vue";
import schedulePage from "@/view/schedulePage.vue";
Vue.use(Router)
export const constantRouterMap =[
    {
        path:'/',
        name:'首页',
        redirect:'/index',
        menuShow:false
    },
    {
        path:'/index',
        name:'首页',
        component: index,
        menuShow:false
    },
    {
        path:'/list',
        name:'列表页',
        component: ListPage,
        menuShow:false
    },
    {
        path:'/videoPage',
        name:'视频页',
        component: videoPage,
        menuShow:false
    },
    {
        path:'/mapPage',
        name:'地图页',
        component: mapPage,
        menuShow:false
    },//
    {
        path:'/schedulePage',
        name:'日程页',
        component: schedulePage,
        menuShow:false
    },//schedulePage
    {
        path: "*",
        redirect: "/index"
    }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default new Router({
    routes: constantRouterMap
})