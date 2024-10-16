// Utilities
// import { createPinia } from 'pinia'

import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import users, { State } from './users'
// export default createPinia()

// export interface State {
//   count: number
// }

export const key: InjectionKey<Store<State>> = Symbol('store')

// export const store = createStore<State>({
//   state: {
//     count: 0
//   }
// })

export const store = createStore<State>({
  modules: {
    // example
    users,
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING,
})
// export default function (/* { ssrContext } */) {

//   return store
// }
