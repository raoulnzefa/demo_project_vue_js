import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes, //routes:routes
    mode: 'history', //  history to remove #
    //  linkActiveClass: 'tag is-active',
})

axios.defaults.baseURL = process.env.VUE_APP_API_URL //"http://localhost:8080"
axios.interceptors.request.use(config => {
    // console.log("req-int"+navigator.onLine)
    if (!navigator.onLine) {
        alert("You are offline!!!")
    }
    // if(localStorage.getItem("EPS-token"))
    //   config.headers.common['EPS-token']=localStorage.getItem("EPS-token")
    if (localStorage.getItem("application_id"))
        config.headers.common['application_id'] = localStorage.getItem("application_id")
        // if (localStorage.getItem("EPS-orgid"))
        //     config.headers.common['EPS-orgid'] = localStorage.getItem("EPS-orgid")
        // if (localStorage.getItem("EPS-loginid"))
        //     config.headers.common['EPS-loginid'] = localStorage.getItem("EPS-loginid")
    config.headers.common['router-path'] = router.currentRoute.path
    return config
})
axios.interceptors.response.use(res => {
    console.log("res-url:" + res.request.responseURL)
    console.log("res-data:" + res.data)
        // if(res.data.msg=="200"){
        //     // if(res.data.token_status=="token-refreshed")
        //     // {
        //     //   localStorage.setItem("EPS-token",res.data.token)
        //     //   console.log('token refresh code goes here')
        //     // }
        // }
        // else if(res.data.msg=="401"){
        //   localStorage.setItem('login-page-msg',"You are already logged in on a different device. Please login again")
        //   router.push("/")
        // }
        // else if(res.data.msg=="403"){
        //   localStorage.setItem('login-page-msg',"Access Denied!!!")
        //   router.push("/")
        // }
    return res
})

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')