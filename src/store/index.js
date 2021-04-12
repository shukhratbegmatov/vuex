import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/plugens/axios.js'

import modules from '@/store/modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules

})

store.$axios = axios

export default store