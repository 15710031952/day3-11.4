import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'

Vue.use(Vuex)

import timeline from './modules/timelist'
// import replyModal from '../'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    timeline
  },
  plugins:[Logger()]
})
