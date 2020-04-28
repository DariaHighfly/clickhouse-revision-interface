import Vue from 'vue'
import Vuex from 'vuex'
import tests from './modules/tests'
import actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        tests
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
