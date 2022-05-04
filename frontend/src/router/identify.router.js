import identifyBar from "../components/Identifybar.vue"
import login from "../components/login.vue"
import register from "../components/register.vue";
// import retrievePassword from "../components/user/retrievepassword/retrievePassword.vue"
// import resetPassword from "../components/user/resetpassword/resetPassword.vue"

const router = {
    path: '/identify',
    component: identifyBar,
    redirect: '/identify/login',
    children: [
        {
            path: '/identify/login',
            component: login
        },
        {
            path: '/identify/register',
            component: register
        },
        // {
        //     path: '/identify/retrievePassword',
        //     component: retrievePassword
        // },
        // {
        //     path: '/identify/resetPassword',
        //     component: resetPassword
        // }
    ]
}

export default router