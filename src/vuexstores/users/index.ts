import { createLogger } from 'vuex'
import state, { State as userState } from './state'
import getters from './getters'
import * as mutations from './mutations'
import actions from './actions'
export type State = userState

export default {
  // namespaced: true,
  getters,
  mutations,
  actions,
  state,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : [],
}
