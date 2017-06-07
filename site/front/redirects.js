/**
 * Created by logov on 05-May-17.
 */

let userFactory = null;

export let redirectsInit = (factory) => userFactory = factory;

export let userIsAuth = (to, from, next) => {
    let auth = userFactory.isAuthenticated();

    if (auth) auth
        .then(() => next(), () => next('login'))
        .catch(() => next('login'));
    else next('login');
};
