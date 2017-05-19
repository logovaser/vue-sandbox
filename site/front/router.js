/**
 * Created by logov on 05-May-17.
 */

import VueRouter from 'vue-router'

const Home = r => require.ensure([], () => r(require('./pages/home/base').default));
const Login = r => require.ensure([], () => r(require('./pages/login/base').default));

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/login', component: Login}
    ]
});
