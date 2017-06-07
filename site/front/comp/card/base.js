/**
 * Created by logov on 05-May-17.
 */

import './base.less'
import template from './base.html'

export default {
    props: ['heading', 'text', 'imgSrc'],
    template,
    data: function () {
        return {
            randomInterval: 0
        }
    },
    methods: {
        triggerTest: function () {
            this.$emit('testEvent')
        }
    },
    mounted: function () {
        setInterval(() => {
            this.randomInterval++;
        }, Math.random() * 1000);
    },
}
