/**
 * Created by logov on 28-Apr-17.
 */

import template from './base.html'

import http from 'axios'

export default {
    template,
    data: function () {
        return {
            form: {}
        }
    },
    methods: {
        submit: function (e) {
            e.preventDefault();
            http.post('/auth/register', this.form);
        }
    }
}
