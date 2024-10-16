import { computed } from 'vue'
import { useUserStore } from '@/stores'
import { Store } from '../config/variables'
import { useStore } from 'vuex'
import { key } from '../vuexstores'
// const store = useStore(key)

export function useStoreData () {
  const store = Store === 'vuex' ? useStore(key) : useUserStore()

  const getters = reactive(Store === 'vuex' ? { ...store.getters } : { ...store.getters })

  const state = reactive(Store === 'vuex' ? { ...store.state.users } : { ...store.$state })


  return {
    getters,
    state,
    // actions,
  }
}
