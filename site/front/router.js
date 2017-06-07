/**
 * Created by logov on 05-May-17.
 */

import VueRouter from 'vue-router'

import userFactory from './userFactory'

import {redirectsInit, userIsAuth} from './redirects'
redirectsInit(userFactory);

const Home = r => require.ensure([], () => r(require('./pages/home/base').default));
const CameraTest = r => require.ensure([], () => r(require('./pages/cameraTest/base').default));
const Login = r => require.ensure([], () => r(require('./pages/login/base').default(userFactory)));
const Register = r => require.ensure([], () => r(require('./pages/register/base').default));
const Cabinet = r => require.ensure([], () => r(require('./pages/cabinet/base').default));

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/camera_test', component: CameraTest},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/cabinet', component: Cabinet, beforeEnter: userIsAuth},
    ]
});
