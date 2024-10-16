/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types

import type { App } from 'vue'
// Plugins
import vuetify from './vuetify'
import { createPinia } from 'pinia'
import { key, store } from '../vuexstores'
import router from '../router'
const piniaStore = createPinia()

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(piniaStore)
    .use(store, key)
}
