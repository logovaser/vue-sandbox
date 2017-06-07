/**
 * Created by logov on 28-Apr-17.
 */

import template from './base.html'
import {wait} from '../../async'

const camera = wait(import('../../comp/camera/base'));

export default {
    components: {camera},
    template
}
