import Vue from 'vue'
import Vuex from 'vuex'
import tests from './modules/tests'
import createLogger from 'vuex/dist/logger';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        tests
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
