/**
 * Created by logov on 28-Apr-17.
 */

import template from './base.html'

import http from 'axios'

export default function (userFactory) {
    return {
        template,
        data: function () {
            return {
                form: {}
            }
        },
        methods: {
            submit: function (e) {
                e.preventDefault();
                http.post('/auth/login', this.form).then(res => {
                    let data = res.data;
                    if (data.type === 'success') {
                        userFactory.setToken(data.token);
                        this.$router.push('cabinet');
                    }
                });
            }
        }
    }
}
